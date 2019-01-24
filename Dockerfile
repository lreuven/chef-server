FROM node:10.15-jessie

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]