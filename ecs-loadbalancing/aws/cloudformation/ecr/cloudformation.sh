#! /bin/bash

aws cloudformation \
deploy \
--template-file cloudformation.yml \
--stack-name elb-example-ecr \
--capabilities CAPABILITY_NAMED_IAM