# Use an official Node.js runtime as a parent image
FROM node:latest

RUN mkdir -p /usr/src/app

# Set the working directory in the container
WORKDIR /usr/src/app

RUN npm install -g nodemon

# Copy package.json and package-lock.json to the container
COPY package*.json /usr/src/app/

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /usr/src/app/

# Expose the port your app will listen on
EXPOSE 4000

# Start the app when the container is started

 