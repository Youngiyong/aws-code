#!/bin/bash

if [ -f ../../../.env.dev ]; then
    set -o allexport; source ../../../.env.dev; set +o allexport
else
    echo "Prepare .env file before deploying"
    exit 1
fi


aws cloudformation \
deploy \
--profile test01 \
--template-file cloudformation.yml \
--stack-name scheduler-holidays-service \
--capabilities CAPABILITY_NAMED_IAM \
--parameter-overrides \
"RdsDatabase=$RDS_DATABASE" \
"RdsHostname=$RDS_HOSTNAME" \
"RdsPassword=$RDS_PASSWORD" \
"RdsPort=$RDS_PORT" \
"RdsUsername=$RDS_USERNAME" \
"EapmServerUrl=$EAPM_SERVER_URL"
