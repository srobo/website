task :build do
  sh('bundle exec jekyll build --config _config.yml,_live.yml')
  sh('docker build --tag srobo/website .')
end

task :deploy do
  sh('docker push srobo/website')
end

task :dev do
  sh('bundle exec jekyll serve --drafts --config _config.yml')
end
