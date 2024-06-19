FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV APP_DIRECTORY="/usr/src/app"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV PATH="${PATH}:${APP_DIRECTORY}/node_modules/.bin/"
ENV PATH="${PATH}:${APP_DIRECTORY}/docs/node_modules/.bin/"
ENV ASTRO_TELEMETRY_DISABLED="1"

RUN corepack enable pnpm

WORKDIR ${APP_DIRECTORY}

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
COPY ./docs/package.json ./docs/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


FROM base AS build

COPY ./.eslintrc.js ./.eslintrc.js
COPY ./turbo.json ./turbo.json
COPY ./docs ./docs
RUN pnpm build


FROM base

COPY --from=build ${APP_DIRECTORY}/docs/dist/ ./docs/dist/

ENV NODE_ENV="production"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

RUN apk add --no-cache dumb-init

EXPOSE 4321

ENTRYPOINT ["dumb-init", "--"]

CMD ["pnpm", "-F", "@sandwich-ui/docs", "preview", "--host"]
