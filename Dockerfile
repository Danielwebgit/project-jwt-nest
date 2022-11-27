FROM node:14.15.0-alpine3.12

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli


USER node

WORKDIR /home/node/app