FROM node:18-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN npm update && \
    npm run build

FROM nginx:alpine as run
COPY --from=builder /app/build /usr/share/nginx/html