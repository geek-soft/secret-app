FROM node:14.7-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY dist ./dist
COPY public ./public
COPY views ./views

CMD ["node", "./dist/main.js"]
