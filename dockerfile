FROM nginx
COPY spa /spa
COPY nginx.conf /etc/nginx/nginx.conf
RUN sed -i 's#href=\"/#href=\"./#g' /spa/index.html
RUN sed -i 's#src=\"/#src=\"./#g' /spa/index.html