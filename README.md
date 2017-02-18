# Student Robotics Website

[![Build status][build-badge]][build-page]

The Student Robotics public website.

## Getting Started

1. [Install Ruby][install-ruby]

2. Install Bundler and Rake

    ``` shell
    $ gem install bundler rake
    ```

3. Start the app in development mode

    ```shell
    $ rake dev
    ```

### To work on the reverse proxy

Right now the Student Robotics website is also acting as the main reverse proxy
for studentrobotics.org. If you are changing the nginx config, you should test
the reverse proxy is working before you commit. To do this, do the following:

1. [Install Docker][docker]

2. Start the container

    ``` shell
    $ rake run
    ```

## Making changes

When you've made a change, either push it to a forked repository, or to a
feature branch, and [raise a pull request][raise-a-pr].

[build-badge]: https://circleci.com/gh/srobo/website/tree/master.png?style=shield
[build-page]: https://circleci.com/gh/srobo/website/tree/master
[docker]: https://docker.com/
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[raise-a-pr]: https://github.com/srobo/website/pull/new/gh-pages
