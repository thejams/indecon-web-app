# pull a node image from docker hub
FROM node:13.12.0-alpine

# set the working dir to /app
WORKDIR /frontend 

# copy package.json to the container
COPY package.json /frontend 

# install package.json modules in container
RUN npm install

# copy everything to container /app
COPY . /frontend 

# expose port 3000 to mount it to another port in local machine 
EXPOSE 3000 

# start server inside container
CMD [ "npm", "start" ] 