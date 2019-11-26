# sample-cmd-request-js
request cmd on nodejs

## Install NodeJS
### CentOS/RHEL
~~~
$ yum install -y gcc-c++ make     
$ curl -sL https://rpm.nodesource.com/setup_8.x | sudo -E bash - 
$ yum install nodejs 
~~~

### Ubuntu
~~~
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash --
$ sudo apt-get install nodejs
~~~

## Start web server
~~~sh
$ npm install
$ npm start
~~~

then, go to `{ip address}:3000`  