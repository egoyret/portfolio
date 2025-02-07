FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR / app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start", "--host=0.0.0.0"]
