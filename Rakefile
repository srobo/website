task :clean do
  sh('rm -rf _site')
end

task :deep_clean => [:clean] do
  sh('rm -rf gems node_modules')
end

task :dependencies do
  sh('bundle install --path gems')
  sh('npm install')
end

task :dev => [:dependencies] do
  sh('bundle exec jekyll serve --drafts --config _config.yml')
end

task :build do
  sh('bundle exec jekyll build --config _config.yml,_live.yml')
  sh('docker build --tag srobo/website .')
end

directory '_secrets'

%W[_secrets/cert.pem _secrets/key.pem].each do |cert_file|
  file cert_file => [:_secrets] do
    sh('openssl req -subj \'/CN=studentrobotics.org/O=John Doe/C=GB\' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout _secrets/key.pem -out _secrets/cert.pem')
  end
end

task :cert => ['_secrets/cert.pem', '_secrets/key.pem']

task :run => [:cert, :build] do
  sh('docker run --rm -p 80:80 -p 443:443 -v $(pwd)/_secrets:/etc/secrets --name srobo srobo/website')
end

task :deploy do
  sh('docker push srobo/website')
end