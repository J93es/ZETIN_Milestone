FROM node:18 AS builder

WORKDIR /workdir
COPY package.json /workdir
COPY package-lock.json /workdir
RUN npm install

COPY . /workdir
RUN npm run build

FROM nginx AS production
COPY --from=builder /workdir/build /usr/share/nginx/html
