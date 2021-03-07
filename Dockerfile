FROM node:12.18.4-alpine as base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

###

FROM nginx:1.19.3-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/build /var/www/html

EXPOSE 3000

CMD nginx -g "daemon off;"
