# Website

[![Build status][build-badge]][build-page]

The Student Robotics public website

## Getting Started

1. [Install Ruby][install-ruby]

2. Install Bundler and Rake

    ``` shell
    $ gem install bundler rake
    ```
3. Install the website's dependencies

    ``` shell
    $ bundle install
    ```

    Note that if you don't want to install the gems to a global location you'll
    need to add `--path gems` to the above command.

4. Start the app in development mode

    ```shell
    $ rake dev
    ```

## Making changes

When you've made a change, either push it to a forked repository, or to a
feature branch, and [raise a pull request][raise-a-pr].

[build-badge]: https://circleci.com/gh/srobo/website/tree/master.png?style=shield
[build-page]: https://circleci.com/gh/srobo/website/tree/master
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[raise-a-pr]: https://github.com/srobo/website/pull/new/gh-pages
