#!/bin/bash

if [ -f ../../../.env.dev ]; then
    set -o allexport; source ../../../.env.dev; set +o allexport
else
    echo "Prepare .env file before deploying"
    exit 1
fi

aws cloudformation \
deploy \
--template-file cloudformation.yml \
--stack-name lastorder-scheduler-scheduleholiday-dev \
--capabilities CAPABILITY_NAMED_IAM \
--parameter-overrides \
"Stage=$STAGE" \
"RdsDatabase=$RDS_DATABASE" \
"RdsHostname=$RDS_HOSTNAME" \
"RdsPassword=$RDS_PASSWORD" \
"RdsPort=$RDS_PORT" \
"RdsUsername=$RDS_USERNAME" \
"RdsReaderHostname=$RDS_READER_HOSTNAME" \
"RdsReaderPort=$RDS_READER_PORT" \
"BiztalkQueueEndpoint=$BIZTALK_QUEUE_ENDPOINT" \
"DeviceApiBaseUrl=$DEVICE_API_BASE_URL" \
"EapmServerUrl=$EAPM_SERVER_URL" \
"SnsApmArn=$SNS_APM_ARN"