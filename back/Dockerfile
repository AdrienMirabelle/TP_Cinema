FROM node:18-alpine

WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]