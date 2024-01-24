#!/bin/sh

# Wait for Kong Admin API to be available
#until $(curl --output /dev/null --silent --head --fail http://kong:8001); do
#    echo "Waiting for Kong Admin API to be available..."
#    sleep 5
#done
while ! curl -sSf http://kong:8001 > /dev/null; do
    echo "Waiting for Kong Admin API to be available..."
    sleep 5
done

# Create a Kong service
curl -i -X POST --url http://kong:8001/services/ --data 'name=account' --data 'url=http://account_app:4200'

# Create a Kong route for the service
curl -i -X POST --url http://kong:8001/services/account/routes --data 'paths[]=/account' --data 'methods[]=POST'
