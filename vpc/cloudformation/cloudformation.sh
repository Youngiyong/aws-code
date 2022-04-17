#!/bin/bash

aws cloudformation \
deploy \
--template-file cloudformation.yml \
--stack-name personal-vpc