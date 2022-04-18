# Error logs in wp-config

## Turn on error logging

First, you'll have to edit your wp-config file, open the file and look for the line that says *That’s all, stop editing! Happy blogging.*

Just before this line you need to add the following code:

```
define ( 'WP_DEBUG', true );
```

This will turn on the WordPress debug mode with the downside that all errors will be displayed on your screens, including wp-admin area.

While this is ok for development environment it would not be a good idea for production.

## Error logging in production environment

If you want errors to be logged, then you will also need to add the following code in your wp-config file, just below the WP_DEBUG line.

```
define ( 'WP_DEBUG_LOG', true );
define ( 'WP_DEBUG_DISPLAY', false );
```

This will save all the errors, warnings and notices that were encountered in a debug.log file in /wp-content/ folder.

That way you can safely tackle the issues behind the scene.

### Prevent Access to Debug file

Add to htaccess file the following:

```
<Files "debug.log">
    Require all denied
    Require ip 127.0.0.1
    Require ip Your.Servers.IP.Address
</Files>
```

This will restrict access to the log file to users whom try to access it directly, but allow the server access to it. Be sure to change “Your.Servers.IP.Address” to your servers IP address or IP pool.

Other resources:
 - [Tips & Tricks For Debugging WordPress PHP](https://www.youtube.com/watch?v=c6PWC9m6Ai8)
 - [How to Set Up WordPress Error Logs in WP-Config](https://www.wpbeginner.com/wp-tutorials/how-to-set-up-wordpress-error-logs-in-wp-config/)
 - [Block Access to WordPress’ debug.log](https://austin.passy.co/2019/block-access-to-wordpress-debug-log/)
 - [Why You Should be Using WP_DEBUG_LOG in Your WordPress Development](https://deliciousbrains.com/why-use-wp-debug-log-wordpress-development/)
