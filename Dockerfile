FROM node:20

WORKDIR  /usr/src/app

ENV TZ=Asia/Kolkata
RUN apt-get update && apt-get install -y tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5000

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]