#!/bin/bash
docker build -t flyline .
docker tag flyline:latest 792855456786.dkr.ecr.us-east-2.amazonaws.com/flyline:latest
docker push 792855456786.dkr.ecr.us-east-2.amazonaws.com/flyline:latest