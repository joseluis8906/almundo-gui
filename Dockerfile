FROM node:10.15.3-stretch

WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli@7.3.8
RUN npm install
RUN npm run build:ssr
CMD ["npm", "run", "serve:ssr"]