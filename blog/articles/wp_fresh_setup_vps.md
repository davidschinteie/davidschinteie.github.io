# WP fresh setup on a vps (virtual private server) or dedicated server

## Install Nginx as a web server

## Install mysql db server

## Install php

## Install wordpress and config

## Reinstall wp on a vps

1. Drop old db and create a new one:

```
mysql -u user -p

mysql> SHOW DATABASES;

+--------------------+ 
| Database           | 
+--------------------+ 
| information_schema | 
| old_wp             |
+--------------------+

mysql> DROP DATABASE old_wp;

mysql> CREATE DATABASE new_wp DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

mysql> GRANT ALL ON new_wp.* TO 'wordpressuser'@'localhost';

mysql> SHOW DATABASES;

+--------------------+ 
| Database           | 
+--------------------+ 
| information_schema | 
| new_wp             |
+--------------------+
```

2. Delete old wp directory and download wp to a new one

```
rm -r /var/www/old_wp

mkdir /var/www/new_wp

cd /tmp

curl -LO https://wordpress.org/latest.tar.gz

tar xzvf latest.tar.gz

cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php

sudo cp -a /tmp/wordpress/. /var/www/new_wp

sudo chown -R www-data:www-data /var/www/new_wp

```

3. Edit new wp-config file

```
. . .

define( 'DB_NAME', 'new_wp' );

/** MySQL database username */
define( 'DB_USER', 'wordpressuser' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

. . .

define( 'FS_METHOD', 'direct' );

// optional:

define ( 'WP_DEBUG_LOG', true );
define ( 'WP_DEBUG_DISPLAY', false );
```

## Issues:

1. Make sure nginx is proprely configured for php to be executed on the server, otherwise you may receive a 403 forbidden error when you try to access the wp route or php files will be downloaded when you try to execute them

```
server {
    listen 80;
    listen [::]:80;
    root /var/www;

    client_max_body_size 2048M;
    autoindex off;

    location / {
        try_files $uri $uri/ /index.php$args;
        index index.html index.htm index.php;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass   unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index  inde.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

2. wordpress pages and posts return not found on post name links - nginx config issue

If your root wordpress is not the webroot but http://domain.com/wordpress/:

```
server{
    #instead of location/
    location /wordpress/ {
        try_files $uri $uri/ /wordpress/index.php?q=$uri$args;
    }
}
```

Some nginx files examples:
 - [Configuring Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lemp-on-ubuntu-20-04)
 - [Nginx Server Block for WordPress](https://www.linuxbabe.com/ubuntu/install-wordpress-ubuntu-20-04-nginx-mariadb-php7-4-lemp)
 - [WP NGINX official config file](https://www.nginx.com/resources/wiki/start/topics/recipes/wordpress/)

3. Increase upload files size issues

Update php.ini and **restart the php service afterwards**

```
vim /etc/php/7.4/fpm/php.ini 

upload_max_filesize = 25M
post_max_size = 13M
memory_limit = 15M

service php7.4-fpm restart
service nginx restart
```

Also check for a nginx config that may limit your upload 

```
server {
    ...
    client_max_body_size 2048M;
    ...
}

service nginx restart
```

4. Permissions for the wp folder

```
sudo chown -R www-data:www-data /var/www/wordpress
```

Other resources:
 - [How To Install Linux, Nginx, MySQL, PHP (LEMP stack) on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-on-ubuntu-20-04)
 - [How to Install WordPress with LEMP on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lemp-on-ubuntu-20-04)
