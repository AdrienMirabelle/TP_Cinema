FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

FROM php:apache as web

COPY --from=build /app/dist /var/www/html

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]