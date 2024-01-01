# build environment
FROM node:18-alpine as build-stage
ARG APPNAME
COPY ./vue/app/${APPNAME} /app/${APPNAME}
WORKDIR /app/${APPNAME}
RUN yarn install
RUN yarn build

# production environment
FROM nginx:stable-alpine as production-stage
ARG APPNAME
COPY --from=build-stage /app/${APPNAME}/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]