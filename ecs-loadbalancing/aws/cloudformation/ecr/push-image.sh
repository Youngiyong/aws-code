#!/bin/bash

source ./env.sh

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 1234.dkr.ecr.ap-northeast-2.amazonaws.com

docker build -t ${REPOSITORY_NAME} ../../../docker/sample --no-cache

docker tag ${REPOSITORY_NAME}:latest 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest

docker push 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:latest
