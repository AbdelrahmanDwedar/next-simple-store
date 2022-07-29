FROM node:alpine
COPY . ../simple-store/
WORKDIR ../simple-store
CMD yarn dev