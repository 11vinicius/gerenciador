FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

COPY . .

RUN apk add openssl3

RUN npm install 

RUN npx prisma generate

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:dev"]
