FROM ubuntu:latest

MAINTAINER lastorder <developer@lastorder.co.kr>

RUN apt-get update && apt-get install -y curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs

WORKDIR /app
COPY ./.npmrc /root/
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . /app/
RUN ["chmod", "+x", "/app/run.sh"]

ENTRYPOINT ["/app/run.sh"]

