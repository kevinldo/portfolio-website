# Base image for non-prod environments
FROM node:22-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build + verify target
FROM base AS build
COPY . .
RUN npm run lint && npm run build

# Prod target (fresh node image)
FROM node:22-alpine AS prod
WORKDIR /app
COPY package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/vite.config.ts ./vite.config.ts
EXPOSE 3001
CMD ["node", "node_modules/vite/bin/vite.js", "preview", "--host", "0.0.0.0", "--port", "3001"]

# Dev target
FROM base AS dev
COPY . .
EXPOSE 3001
CMD ["node", "node_modules/vite/bin/vite.js", "--host", "0.0.0.0", "--port", "3001"]
