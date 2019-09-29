#!/usr/bin/env bash

set -e

git config --global push.default simple
git config --global user.email $(git --no-pager show -s --format='%ae' HEAD)
git config --global user.name $CIRCLE_USERNAME

npm install gh-pages

node_modules/.bin/gh-pages --dist _site/ --message "Deploy build $CIRCLE_BUILD_NUM - $CIRCLE_SHA1 [ci skip]"
