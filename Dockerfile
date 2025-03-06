FROM node:18

WORKDIR /app

COPY . .

RUN yarn install 

RUN yarn global add ts-node typescript

ARG PORT=3000

EXPOSE $PORT

ENTRYPOINT yarn start 
