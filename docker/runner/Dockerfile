FROM node:latest
RUN apt update && apt install sudo
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install && rm -rf ./aws
RUN yarn global add @vue/cli @vue/cli-service