FROM node:14 as builder

ENV NODE_ENV=production

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .


# Stage 2 build for creating smaller image
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 8080
CMD [ "node", "server.js" ]