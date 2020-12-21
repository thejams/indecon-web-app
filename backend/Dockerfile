# pull a node image from docker hub
FROM node:13.12.0-alpine

# set the working dir to /app
WORKDIR /server 

# copy package.json to the container
COPY package.json ./

# install package.json modules in container
RUN npm install

# copy everything to container /app
COPY . ./

# expose port 3001 to mount it to another port in local machine 
EXPOSE 3001 

# start server inside container
CMD [ "node", "src/index.js" ] 