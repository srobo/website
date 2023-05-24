FROM ruby:2.7

ENV GLOBAL_GEMS=true

WORKDIR /usr/src/website

RUN git config --global --add safe.directory /usr/src/website && git config --global --add safe.directory /usr/src/website/_sass/brand

RUN gem install bundler rake

COPY . ./

RUN rake dependencies

CMD ["rake", "dev"]
