FROM node:16.18.1-alpine3.16

ENV LANG="en_US.UTF-8"
ENV LANGUAGE="en_US.UTF-8"

ENV TZ Europe/Moscow

ENV APP_HOME /test_task_vue

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

