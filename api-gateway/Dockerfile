FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /app
COPY package*.json .
RUN adduser -S app
COPY / .
RUN npm i
RUN chown -R app /opt/app
USER app
EXPOSE 3000
ENTRYPOINT [ "./start.sh" ]
# CMD [ "npm", "start" ]