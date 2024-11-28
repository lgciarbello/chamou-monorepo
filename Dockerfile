FROM node:20-alpine as builder

WORKDIR /dist

RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build:chamou
RUN npm run build:admin

# Usa a imagem base do nginx
FROM nginx:latest

# Copia o arquivo de configuração personalizado do nginx
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf

# Copia as pastas do projeto para dentro do contêiner
COPY --from=builder /dist/chamou /usr/share/nginx/html/chamou
COPY --from=builder /dist/admin /usr/share/nginx/html/admin

# Expõe as portas
EXPOSE 80
EXPOSE 81
