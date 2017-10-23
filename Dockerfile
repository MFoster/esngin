FROM node:boron

ADD . /tmp/node

WORKDIR /tmp/node

RUN npm install --no-progress 

RUN npm install -g grunt-cli

CMD ["grunt", "watch"]