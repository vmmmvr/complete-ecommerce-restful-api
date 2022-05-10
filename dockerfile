FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install tslint  
RUN npm install -g ts-node
USER node
RUN npm install

COPY --chown=node:node . .
CMD ["npm", "run", "dev"] 
EXPOSE  4500