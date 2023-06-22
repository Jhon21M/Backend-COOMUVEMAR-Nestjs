FROM node:latest as development


RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

RUN npm uninstall argon2 --save

RUN npm update

COPY . .

RUN npx prisma migrate

RUN npx prisma generate

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]
