# Step 1: Prune Unnecessary Dependencies
FROM node:lts-alpine AS pruner

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=web --docker

# Step 2: Install Dependencies
FROM node:lts-alpine AS installer

WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
COPY --from=pruner /app/turbo.json ./turbo.json

# Add full workspace dependencies
COPY --from=pruner /app/out/full . 

RUN npm install -g npm
RUN npm install --frozen-lockfile

# Ensure Changesets is installed
RUN npm install -g changesets

# Skip changeset versioning if the .changeset folder is missing
RUN if [ -d ".changeset" ]; then npx changeset version; else echo "No changesets found, skipping versioning."; fi
RUN npm install --frozen-lockfile

# Step 4: Build the Project
FROM node:lts-alpine AS builder
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
WORKDIR /app
COPY --from=installer /app/ .
RUN npm install -g npm
RUN npm run build

# Step 5: Run the Application
FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g npm
COPY --from=builder /app/ .
WORKDIR /app/apps/web

CMD ["npm", "start"]
