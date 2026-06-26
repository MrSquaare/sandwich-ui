FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV TURBO_TELEMETRY_DISABLED="1"
ENV STORYBOOK_DISABLE_TELEMETRY="1"

WORKDIR "/usr/src/app"

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
RUN corepack enable pnpm
COPY ./packages/core/package.json ./packages/core/
COPY ./packages/react/package.json ./packages/react/
COPY ./apps/react-storybook/package.json ./apps/react-storybook/


FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY ./turbo.json ./turbo.json
COPY ./packages/core ./packages/core
COPY ./packages/react ./packages/react
COPY ./apps/react-storybook ./apps/react-storybook
RUN pnpm build


FROM nginx:stable-alpine AS production

COPY --from=build /usr/src/app/apps/react-storybook/storybook-static/ /usr/share/nginx/html

EXPOSE 80
