FROM node:18-alpine

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

USER node

WORKDIR /home/node/account
