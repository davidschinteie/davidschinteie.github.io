# Increase WP upload limit

Method 1. Edit .htaccess

```
php_value upload_max_filesize 64M
php_value post_max_size 128M
php_value memory_limit 256M
php_value max_execution_time 300
php_value max_input_time 300
```

Method 2. Edit functions.php

```
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );
```

Method 3. Add php.ini file in wordpress root folder

```
upload_max_filesize = 25M
post_max_size = 13M
memory_limit = 15M
```

Method 4. Edit wp-config.php file

```
@ini_set( 'upload_max_size' , '20M' );
@ini_set( 'post_max_size', '13M');
@ini_set( 'memory_limit', '15M' );
```

Method 5. php.ini file from the server root

Other resources:
 - [Increase Media File Maximum Upload Size in WordPress Step by Step Guide](https://www.cloudways.com/blog/increase-media-file-maximum-upload-size-in-wordpress/)
 - [How to Increase Maximum Upload File Size in WordPress](https://help.servmask.com/2018/10/27/how-to-increase-maximum-upload-file-size-in-wordpress/)
