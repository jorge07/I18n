FROM node:6.3-slim

WORKDIR /app

RUN curl https://install.meteor.com/ | sh

### Mongo Locale
RUN apt-get update && apt-get install locales \
    && locale-gen en_US.UTF-8 \
    && localedef -i en_GB -f UTF-8 en_US.UTF-8

CMD meteor
