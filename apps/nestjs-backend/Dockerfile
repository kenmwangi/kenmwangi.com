FROM node:lts-alpine AS pruner

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=nestjs-backend --docker

FROM node:lts-alpine AS installer

WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
COPY --from=pruner /app/turbo.json ./turbo.json

RUN npm install -g npm
RUN npm install --frozen-lockfile

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=installer /app/  .
COPY --from=pruner /app/out/full  .
RUN npm install -g npm
RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/ .

CMD [ "node", "apps/nestjs-backend/dist/main" ]