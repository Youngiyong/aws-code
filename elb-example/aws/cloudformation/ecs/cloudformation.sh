#!/bin/bash

aws cloudformation \
deploy \
--template-file cloudformation.yml \
--stack-name elb-ecs-example \
--capabilities CAPABILITY_NAMED_IAM \
