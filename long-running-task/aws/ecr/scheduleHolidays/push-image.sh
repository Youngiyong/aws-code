#!/bin/bash

source ./env.sh

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com

docker build -t ${REPOSITORY_NAME} ../../../docker/scheduleHolidays --no-cache

docker tag ${REPOSITORY_NAME}:latest 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest

docker push 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest
