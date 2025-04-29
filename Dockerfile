FROM php:8.2-apache

RUN docker-php-ext-install pdo pdo_mysql

RUN a2enmod rewrite

# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf
RUN echo '<Directory /var/www/html/public>
AllowOverride All
Require all granted
</Directory>' > /etc/apache2/conf-available/symfony.conf && a2enconf symfony
RUN chown -R www-data:www-data /var/www/html