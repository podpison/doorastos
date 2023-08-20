FROM node:18

WORKDIR /pages

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]