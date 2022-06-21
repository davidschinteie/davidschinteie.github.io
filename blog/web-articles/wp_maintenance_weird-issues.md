# WP Maintenance - weird issues

## Detect if paths in advanced-cache.php are correct

WP Rocket plugin saves the absolute path of the WP installation in multiple lines of the file advanced-cache.php, for example:

```
if ( file_exists( 'public_html/blog/wp-content/plugins/wp-rocket/inc/vendors/classes/class-rocket-mobile-detect.php' ) && ! class_exists( 'Rocket_Mobile_Detect' ) ) {
include_once 'public_html/blog/wp-content/plugins/wp-rocket/inc/vendors/classes/class-rocket-mobile-detect.php';
}
```

I had an incident when the following happened:

 - migrate a website to a different hosting provider (create a staging env)
 - the website was working fine on the first examination
 - after triggering an update on a page/post/plugin, the website  returned `Something went wrong` 
 - the dashboard was working fine with no error message (however, on a different instance event the dashboard was crashed and returned the same error)
 - I found out in error_log that the error was caused by the old path in the advanced-cache.php file.

Solution:
 - renamed the wp-rocket plugin directory in order to force disable 
 - renamed advanced-cache.php file in order to bypass the error

Other resources:
 - [Detect if paths in advanced-cache.php are correct](https://github.com/wp-media/wp-rocket/issues/1747)
