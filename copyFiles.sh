rm -rf www_root
mkdir www_root
cp -R dist/* www_root/
cd www_root
http-server -p 8080