#!/bin/bash

source ./env.sh

export TAG=$(git describe --tags)

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com

# for git version
docker build -t ${REPOSITORY_NAME}:$TAG ../..

docker tag ${REPOSITORY_NAME}:$TAG 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:$TAG

docker push 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:$TAG

# for release tag
docker build -t ${REPOSITORY_NAME}:release ../..

docker tag ${REPOSITORY_NAME}:release 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:release

docker push 299665028667.dkr.ecr.ap-northeast-2.amazonaws.com/${REPOSITORY_NAME}:release
