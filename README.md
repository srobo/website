# Student Robotics Website

[![Build status][build-badge]][build-page]

The Student Robotics public website.

## Getting Started

0. [Clone this repo][clone-repo]

1. [Install Ruby 3][install-ruby]

   See `.ruby_version` for the precise version, though 3.3 or above will
   probably be fine.

2. (Optional) Install [Node.js and npm][install-node].

    This allows spell checking to be run locally.
    Node is not required for the website to be built.

3. Install Bundler (2.3 or above) and Rake.

   Depending on how you have installed Ruby these may already be installed.

    ``` console
    $ gem install bundler rake
    ```

4. Start the app in development mode

    ```shell
    $ rake dev
    ```

## Making changes

When you've made a change, either push it to a forked repository, or to a
feature branch, and [raise a pull request][raise-a-pr].

[build-badge]: https://circleci.com/gh/srobo/website/tree/master.png?style=shield
[build-page]: https://circleci.com/gh/srobo/website/tree/master
[clone-repo]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[install-node]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[raise-a-pr]: https://github.com/srobo/website/pull/new/main
[circle-ci]: https://circleci.com/gh/srobo/website
