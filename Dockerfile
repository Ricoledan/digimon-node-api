FROM node:current-alpine3.10 as base
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g ts-node-dev && npm install

FROM base as dev
ENV NODE_ENV=dev
COPY . .
CMD [ "ts-node-dev", "--respawn", "--pretty", "--transpile-only", "src/server.ts" ]

FROM base as prod
ENV NODE_ENV=prod
COPY . . 
RUN npm run build
CMD [ "node", "dist/server.ts" ]