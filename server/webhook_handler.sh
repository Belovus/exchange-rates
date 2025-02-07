#!/bin/bash

docker_image="exchange-rates_react-nginx-app"
container_name="exchange-rates"

read -r payload

echo "$(date) Webhook received: $payload" >> /var/log/docker_webhook.log

docker pull $docker_image:latest
docker stop $container_name
docker rm $container_name
docker run -d --name $container_name $docker_image:latest
