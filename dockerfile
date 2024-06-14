FROM nginx

LABEL image.authors="ZeJie"

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf

COPY portfolio /usr/share/nginx/html/portfolio

EXPOSE 80