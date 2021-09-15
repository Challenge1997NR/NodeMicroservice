# Based on https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:14

ENV NODE_ENV=development

RUN apt-get update && apt-get -y dist-upgrade
RUN apt install -y netcat

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]