task :clean do
  sh('rm -rf _site')
end

task :deep_clean => [:clean] do
  sh('rm -rf gems')
end

task :dependencies do
  sh('bundle config set --local path "gems"')
  sh('bundle install')
end

file '_sass/brand/.git' do
  sh('git submodule update --init')
end

task :submodules => ['_sass/brand/.git']

task :dev => [:dependencies, :submodules] do
  sh('bundle exec jekyll serve --drafts --config _config.yml,_dev.yml')
end

task :build_site => [:dependencies, :submodules] do
  sh('bundle exec jekyll build --config _config.yml')
end

task :validate_site => [:build_site] do
  sh('bundle exec ruby scripts/validate-icalendar.rb')

  # Explanation of arguments:
  # --disable-external  # For speed. Ideally we'd check external links too, but ignoring for now.
  # --empty-alt-ignore  # To avoid needing to fix lots upfront, we can migrate towards this later.
  # --allow-hash-href   # Allow empty `#` links to mean "top of page". It's true that these can be errors, however we have far too many to really address this.
  # --url-swap          # Adjust for Jekyll's baseurl. See https://github.com/gjtorikian/html-proofer/issues/618 for more.
  # --url-ignore        # Allow mailto links without a target email, for our Share links. Works around https://github.com/gjtorikian/html-proofer/issues/552.
  sh('bundle exec htmlproofer _site --disable-external --empty-alt-ignore --allow-hash-href --url-swap "^/website/:/" --url-ignore "/^mailto:?/"')
end

task :build_docker do
  sh('docker build --tag srobo/website .')
end

task :validate_nginx => [:build_docker] do
  sh('docker run srobo/website nginx -t')
end

task :validate => [:validate_site, :validate_nginx]

task :build => [:build_site, :build_docker]

task :run => [:build_docker] do
  sh('docker run --rm -p 80:80 -p 443:443 --name srobo srobo/website')
end

task :deploy do
  sh('docker push srobo/website')
end
