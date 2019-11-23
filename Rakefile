task :clean do
  sh('rm -rf _site')
end

task :deep_clean => [:clean] do
  sh('rm -rf gems')
end

task :dependencies do
  sh('bundle install --path gems')
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

task :build_docker do
  sh('docker build --tag srobo/website .')
end

task :build => [:build_site, :build_docker]

task :run => [:build_docker] do
  sh('docker run --rm -p 80:80 --name srobo srobo/website')
end

task :deploy do
  sh('docker push srobo/website')
end
