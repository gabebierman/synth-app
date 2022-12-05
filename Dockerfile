FROM node:18-alpine
WORKDIR /app
COPY . .
# RUN yarn install --production
CMD ["node", "server.prod.js"]
EXPOSE 8080