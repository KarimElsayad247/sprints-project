FROM node:14 as build-step

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# We don't copy everything at once to take advantage of layer cache in docker
COPY package*.json /app/
 
# Install any needed packages
RUN npm i
RUN npm ci
 
# Bundle app source
COPY . /app
 
RUN npm run build

# Second step: put the build results in an nginx image to create
# a much smaller image
FROM nginx:1.20.1-alpine

COPY --from=build-step public/ /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/nginx.conf
