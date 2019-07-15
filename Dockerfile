FROM php:latest

RUN apt-get update && apt-get install -y \
    wget

RUN useradd -b /home -d /home/projectuser -m projectuser

USER projectuser

ADD . /home/projectuser

WORKDIR /home/projectuser/scripts

RUN ./install_composer.sh

WORKDIR /home/projectuser

EXPOSE 8000

CMD [ "/usr/local/bin/php", "artisan", "serve", "--host='0.0.0.0'"]