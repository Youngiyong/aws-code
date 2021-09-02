FROM ubuntu:latest

# 메인테이너 정보 (옵션)
MAINTAINER lastorder <developer@lastorder.co.kr>

RUN apt-get update && apt-get install -y curl gnupg

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs

WORKDIR /app
# COPY ./.npmrc /root/
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

# install node dependencies
RUN npm install

COPY . /app/

ENTRYPOINT ["/app/run.sh"] 
