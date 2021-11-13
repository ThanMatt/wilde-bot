FROM node:16-slim

WORKDIR /usr/wilde-bot

CMD ["yarn", "start:dev"]