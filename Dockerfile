FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /
RUN adduser -S app
COPY api/ .
RUN npm i
RUN chown -R app /opt/app
USER app
EXPOSE 3000
CMD npm run dev