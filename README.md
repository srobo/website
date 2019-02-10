# Student Robotics Website

[![Build status][build-badge]][build-page]

The Student Robotics public website.

## Getting Started

1. [Install Ruby][install-ruby]

2. Install Bundler (1.x) and Rake

    ```
    $ gem install bundler -v '~> 1' rake
    ```

3. Install [Node Package Manager (npm)][install-npm]

4. Start the app in development mode

    ```shell
    $ rake dev
    ```

### To work on the reverse proxy

Right now the Student Robotics website is also acting as the main reverse proxy
for studentrobotics.org. If you are changing the nginx config, you should test
the reverse proxy is working before you commit. To do this, do the following:

1. [Install Docker][docker]

2. Fetch the latest base image:
    ``` shell
    $ docker pull nginx
    ```

3. Optionally change the bound ports so they don't conflict with your local host's
   configuration. For example, you might want to edit the [`Rakefile`](Rakefile)
   to remove `-p 80:80`.

4. Start the container

    ``` shell
    $ rake run
    ```

5. Visit <https://localhost:443> in a browser (adjust the port as needed if you
   edited it), and confirm that you see a copy of the SR website (also check that
   you didn't get redirect to the real one!)

6. Make your changes to the [`nginx.conf`](_env/nginx.conf)


7. Get those changes into the container and reload nginx:
    ``` shell
    $ docker cp _env/nginx.conf srobo:/etc/nginx/nginx.conf && docker kill -s HUP srobo
    ```

8. Refresh your browser and bask in the glory of your changes

## Making changes

When you've made a change, either push it to a forked repository, or to a
feature branch, and [raise a pull request][raise-a-pr].

## Deployment

***Note**: full deployment instructions have their [own README][deployment-readme]*

The `master` branch of repo is built into a Docker image by [Circle CI][circle-ci]
which is then deployed manually into a Kubernetes hosted on Google Cloud.

[build-badge]: https://circleci.com/gh/srobo/website/tree/master.png?style=shield
[build-page]: https://circleci.com/gh/srobo/website/tree/master
[docker]: https://docker.com/
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[install-npm]: https://nodejs.org/en/download/
[raise-a-pr]: https://github.com/srobo/website/pull/new/gh-pages
[circle-ci]: https://circleci.com/gh/srobo/website
[deployment-readme]: _env/README.md
