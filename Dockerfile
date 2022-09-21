# base nodejs v18
FROM node:18

# create app directory
WORKDIR /usr/src/app

# bundle app source
COPY . .

# install node_modules
RUN npm run install-server && npm run install-client

# build client React JS
RUN npm run build-client

# app run on port 7500 & 7501
EXPOSE 7500
EXPOSE 7501

# run the server
CMD [ "node", "server.js" ]