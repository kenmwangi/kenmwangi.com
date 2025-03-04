FROM node:lts-alpine AS pruner

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=web --docker

FROM node:lts-alpine AS installer

WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
COPY --from=pruner /app/turbo.json ./turbo.json

# Add this step to include full workspace dependencies
COPY --from=pruner /app/out/full . 

RUN npm install -g npm
RUN npm install --frozen-lockfile

FROM node:lts-alpine AS builder
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
WORKDIR /app
COPY --from=installer /app/ .
RUN npm install -g npm
RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g npm
COPY --from=builder /app/ .
WORKDIR /app/apps/web

CMD ["npm", "start"]
