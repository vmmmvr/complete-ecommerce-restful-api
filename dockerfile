FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package.json ./
COPY tsconfig.json ./
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install tslint  

USER node
COPY --chown=node:node . .

RUN npm install
RUN npm run build


## this is stage two , where the app actually runs
FROM node:12
WORKDIR /home/node/app
COPY package.json ./
COPY .env.prod ./.env
RUN npm install --only=production
COPY --from=0 /home/node/app/build .
RUN npm install pm2 -g
EXPOSE 80
CMD ["pm2-runtime", "server.js"]




