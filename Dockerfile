FROM softramsdocker/nginx-node

ENV DEFAULT_PAGESPEED_REBEACON_KEY uwuudeL7iedoo7Meengi

ENV SSL_ENABLED false

# install npm ( in separate dir due to docker cache)
ADD package.json /tmp/npm_inst/package.json
RUN cd /tmp/npm_inst &&\
    npm install &&\
    mkdir -p /tmp/app &&\
    mv /tmp/npm_inst/node_modules /tmp/app/

# build and publish application
ADD . /tmp/app
RUN cd /tmp/app &&\
    npm run build:aot:prod &&\
    mkdir -p /app/www/node_modules &&\
    mv /tmp/app/node_modules/* /app/www/node_modules &&\
    mv ./dist/prod/* /app/www

# clean
RUN rm -Rf /tmp/npm_inst &&\
    rm -Rf /tmp/app &&\
    rm -Rf /root/.npm

# this is for virtual host purposes
EXPOSE 80

CMD ["/sbin/my_init"]
