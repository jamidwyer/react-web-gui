FROM node:14.1-alpine AS builder

WORKDIR /var/www
COPY package.json /var/www
RUN npm install --silent

ENV PATH="./node_modules/.bin:$PATH"

COPY . /var/www/
RUN npm run build
CMD npm start