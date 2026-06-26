FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV TURBO_TELEMETRY_DISABLED="1"
ENV ASTRO_TELEMETRY_DISABLED="1"

WORKDIR "/usr/src/app"

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
RUN corepack enable pnpm
COPY ./apps/docs/package.json ./apps/docs/


FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY ./turbo.json ./turbo.json
COPY ./apps/docs ./apps/docs
RUN pnpm build


FROM nginx:stable-alpine AS production

COPY --from=build /usr/src/app/apps/docs/dist/ /usr/share/nginx/html

EXPOSE 80
