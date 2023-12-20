FROM mcr.microsoft.com/playwright:v1.40.1-jammy

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "codeceptjs" ,"run"]