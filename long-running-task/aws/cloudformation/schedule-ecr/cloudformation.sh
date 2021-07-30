#!/bin/bash

aws cloudformation \
deploy \
--template-file cloudformation.yml \
--stack-name lastorder-scheduler-ecr \
--capabilities CAPABILITY_NAMED_IAM
