#!/bin/bash

source ./env.sh

export TAG=$(git describe --tags)

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com

# for git version
docker build -t ${REPOSITORY_NAME}:$TAG ../../../docker/sample --no-cache

docker tag ${REPOSITORY_NAME}:$TAG 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:$TAG

docker push 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:$TAG

# for release tag
docker build -t ${REPOSITORY_NAME}:release ../../../docker/sample --no-cache

docker tag ${REPOSITORY_NAME}:release 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:release

docker push 1234.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:release
