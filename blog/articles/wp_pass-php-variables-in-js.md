# Pass php variables to js

In functions.php file, just after `wp_enqueue_script` for the js file:

```
wp_localize_script('theme-scripts', 'some_php_var', array('some_php_var' => value));
```

In theme-script js file:

```
console.log(some_php_var);
```

Enjoy!:))