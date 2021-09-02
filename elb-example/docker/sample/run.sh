#!/bin/bash

echo "# Starting pointExpirationNoti"
echo "# Environment Variables"
env

npm start || cat /root/.npm/_logs/*
