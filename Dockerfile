#!/bin/bash
# STAGE 1
FROM node:20.9.0-alpine as build-stage

RUN mkdir usr/app

COPY . usr/app

WORKDIR usr/app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN yarn install

ENV PATH /usr/src/app/node_modules/ .bin%$PATH

RUN yarn build

RUN echo "Время последней сборки: $(date)" > /build-info.txt

CMD ["cat", "/build-info.txt"]

# STAGE 2
FROM nginx:alpine

COPY ./server/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /usr/app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
