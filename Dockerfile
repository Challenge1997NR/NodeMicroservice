# Based on https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:14

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install only dependencies listed in "dependencies" and not "devDependencies"
RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]