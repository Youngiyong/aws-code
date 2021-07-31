#!/bin/bash

aws cloudformation \
--profile test01 \
deploy \
--template-file cloudformation.yml \
--stack-name scheduler-cluster \
--capabilities CAPABILITY_NAMED_IAM
