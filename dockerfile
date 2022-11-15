# Base image
FROM node:16-alpine3.15

# Make folder to put files in
RUN mkdir -p /usr/src/app/calculon

# subsequent commands run in this folder
WORKDIR /usr/src/app/calculon

# Copy package .json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app
COPY . .

# Expose port to access server
EXPOSE 3000

# Command to run app
CMD [ "npm", "start" ]