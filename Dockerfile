FROM node:current-alpine3.10 as base
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g ts-node-dev && npm install

FROM base
COPY . .
CMD [ "ts-node-dev", "--respawn", "--pretty", "--transpile-only", "src/server.ts" ]