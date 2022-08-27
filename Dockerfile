FROM node:14-alpine as builder

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

#RUN yarn install --network-timeout 100000

RUN apk add --update git

COPY . /app

#RUN yarn build

RUN npm run build

RUN ls /app

RUN ls

FROM nginx:alpine


COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]