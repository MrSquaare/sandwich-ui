FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV APP_DIRECTORY="/usr/src/app"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV PATH="${PATH}:${APP_DIRECTORY}/node_modules/.bin/"
ENV PATH="${PATH}:${APP_DIRECTORY}/storybook/node_modules/.bin/"

RUN corepack enable pnpm

WORKDIR ${APP_DIRECTORY}

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
COPY ./packages/react/package.json ./packages/react/
COPY ./packages/react-storybook/package.json ./packages/react-storybook/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


FROM base AS build

COPY ./turbo.json ./turbo.json
COPY ./packages/react ./packages/react
COPY ./packages/react-storybook ./packages/react-storybook
RUN pnpm build


FROM base

COPY --from=build ${APP_DIRECTORY}/packages/react-storybook/storybook-static/ ./packages/react-storybook/storybook-static/

ENV NODE_ENV="production"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

RUN apk add --no-cache dumb-init

EXPOSE 4173

ENTRYPOINT ["dumb-init", "--"]

CMD ["pnpm", "-F", "@sandwich-ui/react-storybook", "preview", "--host"]
