FROM node:latest AS builder

WORKDIR /server

COPY package*.json ./
RUN npm ci

COPY src src

#RUN npm run build

FROM node:14-alpine

WORKDIR /server
RUN apk add --no-cache tini

COPY package*.json ./
RUN npm ci

COPY --from=builder /server/src src/
CMD [ "/sbin/tini", "--", "node", "src/index.js"]