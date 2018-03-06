# use the latest version of nodejs
FROM node:9.7.0

# copy package and package-lock to tmp dir and install
# this would enable that this layer is cached and reused everytime
# unless the node dependency has changed
COPY package*.json /tmp/

RUN cd /tmp && npm install

RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN cd /usr/src/app && npm run build

EXPOSE 80

ENV PORT 80

ENV HOST 127.0.0.1

CMD ["node", "bin/www"]
