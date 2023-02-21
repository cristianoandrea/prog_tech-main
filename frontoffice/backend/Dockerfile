FROM node:latest

WORKDIR /app/frontoffice/backend
COPY . .
RUN npm install -g nodemon
RUN npm install

EXPOSE 4000
CMD ["npm", "run", "dev"]
