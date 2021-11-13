FROM node:16-slim

WORKDIR /usr/wilde-bot

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add nodemon

RUN yarn global add @babel/node

COPY . .

EXPOSE 4000