FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 

RUN yarn global add ts-node typescript

COPY . .

EXPOSE 3000

CMD ["yarn", "start"] 
