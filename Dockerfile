FROM nginx

ADD _site /var/www
ADD _env/nginx.conf /etc/nginx/nginx.conf