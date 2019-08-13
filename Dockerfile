FROM node:10

WORKDIR /docker_fixit

COPY package*.json  ./

RUN \
 npm install\
 npm install @angular/cli

EXPOSE 8080

ENV NAME WORDUP

RUN npm start
