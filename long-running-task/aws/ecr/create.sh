#!/bin/sh

aws ecr create-repository --repository-name scheduler --profile test01 --image-scanning-configuration scanOnPush=true