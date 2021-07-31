#!/bin/sh
aws ecs create-service \
    --cluster scheduler-cluster \
    --service-name scheduler-service \
    --task-definition scheduler-holidays-service:1 \
    --desired-count 1 \
    --launch-type "FARGATE" \
    --profile test01 \
    --network-configuration "awsvpcConfiguration={subnets=['subnet-0c9dfa77'],securityGroups=['sg-008e8b240917b0673'], assignPublicIp= "ENABLED"}"
