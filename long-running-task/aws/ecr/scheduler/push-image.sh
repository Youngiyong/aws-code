#!/bin/bash

source ./env.sh

aws ecr get-login-password --profile test01 | docker login --username AWS --password-stdin 219307222257.dkr.ecr.ap-northeast-2.amazonaws.com

docker build -t ${REPOSITORY_NAME} ../../../docker/scheduleHolidays --no-cache

docker tag ${REPOSITORY_NAME}:latest 219307222257.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest

docker push 219307222257.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest
