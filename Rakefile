require 'fileutils'

task :clean do
  sh('rm -rf _site')
end

task :deep_clean => [:clean] do
  sh('rm -rf gems')
end

task :dependencies do
  if ! ENV["GLOBAL_GEMS"]
    sh('bundle config set --local path "gems"')
  end
  sh('bundle install')

  # Fix pathutil on Ruby 3; works around https://github.com/envygeeks/pathutil/pull/5
  # as suggested by https://stackoverflow.com/a/73909894/67873
  pathutil_path = `bundle exec gem which pathutil`.chomp()
  content = File.read(pathutil_path).gsub(', kwd', ', **kwd')
  File.write(pathutil_path, content)
end

task :spelling_dependencies do
  sh('npm install')
end

file '_sass/brand/.git' do
  sh('git submodule update --init')
end

task :submodules => ['_sass/brand/.git']

task :dev => [:dependencies, :submodules] do
  sh('bundle exec jekyll serve --drafts --config _config.yml,_dev.yml')
end

task :build => [:dependencies, :submodules] do
  sh('bundle exec jekyll build --config _config.yml')
end

task :build_spellings => [:build, :spelling_dependencies]

task :validate_build => [:build] do
  sh('bundle exec ruby scripts/validate-icalendar.rb')

  # Explanation of arguments:
  # --disable-external  # For speed. Ideally we'd check external links too, but ignoring for now.
  # --ignore-missing-alt  # To avoid needing to fix lots upfront, we can migrate towards this later.
  # --ignore-empty-mailto # Allow mailto links without a target email, for our Share links.
  # --allow-hash-href   # Allow empty `#` links to mean "top of page". It's true that these can be errors, however we have far too many to really address this.
  # --allow-missing-href  # Allow `href` to be omitted, so that `<a>` elements can be anchors.
  # --no-enforce-https  # Don't enforce HTTPS. Ideally we'll upgrade all the links, however there's many old links here which aren't trivial to fix.
  # --swap-urls         # Adjust for Jekyll's baseurl. See https://github.com/gjtorikian/html-proofer/issues/618 for more.
  # --ignore-urls       # Allow old event links which aren't easily updated.
  sh('bundle exec htmlproofer _site --disable-external --ignore-missing-alt --ignore-empty-mailto --allow-hash-href --allow-missing-href --no-enforce-https --swap-urls "^/website/:/" --ignore-urls "/^\/events\/sr201[23]/"')
end

task :validate_spellings => [:build_spellings] do
  sh('npm run spell-check')
end

task :validate => [:validate_build, :validate_spellings]
