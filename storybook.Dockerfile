FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV APP_DIRECTORY="/usr/src/app"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV PATH="${PATH}:${APP_DIRECTORY}/node_modules/.bin/"
ENV PATH="${PATH}:${APP_DIRECTORY}/storybook/node_modules/.bin/"

RUN corepack enable pnpm

WORKDIR ${APP_DIRECTORY}

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
COPY ./sandwich-ui/package.json ./sandwich-ui/
COPY ./storybook/package.json ./storybook/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


FROM base AS build

COPY ./.eslintrc.js ./.eslintrc.js
COPY ./turbo.json ./turbo.json
COPY ./sandwich-ui ./sandwich-ui
COPY ./storybook ./storybook
RUN pnpm build


FROM base

COPY --from=build ${APP_DIRECTORY}/storybook/storybook-static/ ./storybook/storybook-static/

ENV NODE_ENV="production"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

RUN apk add --no-cache dumb-init

EXPOSE 4173

ENTRYPOINT ["dumb-init", "--"]

CMD ["pnpm", "-F", "@sandwich-ui/storybook", "preview", "--host"]
