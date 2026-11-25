FROM php:8.2-apache-bookworm
USER root
RUN rm /etc/apt/preferences.d/no-debian-php
RUN apt update
RUN apt install -y nano curl php-cli php8.2-mysql php-zip php-mbstring php-xml php-json unzip
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN composer global require laravel/installer
RUN apt-get install -y libicu-dev \
    && docker-php-ext-install intl \
    && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install pdo_mysql
EXPOSE 8000

#apt php-defaults
#php artisan serve --host=0.0.0.0 --port=8080 
