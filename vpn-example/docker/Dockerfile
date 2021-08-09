FROM ubuntu:latest

MAINTAINER lastorder <youn9354@naver.com>

RUN apt-get update && apt-get install -y curl gnupg

RUN ["chmod", "+x", "/app/run.sh"]

ENTRYPOINT ["/app/run.sh"]

