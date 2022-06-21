# Creating new files in the WordPress theme editor

WordPress theme editor can be used to modify theme files straight from the WordPress admin dashboard.

If you want to create a new file for the child theme, then there is no option for that from wp admin. Instead you would need to manually create the file via FTP or terminal access.

Add the following code to the file and click Update file:

```
add_action('after_setup_theme', function() {
	$file = get_stylesheet_directory() . '/css/new-style.css';
	if(!file_exists($file)) {
		include_once ABSPATH . 'wp-admin/includes/file.php';
		\WP_Filesystem();
		global $wp_filesystem;
		$wp_filesystem->put_contents($file, '', FS_CHMOD_FILE);
	}
});
```

After adding this action, reloading any page should trigger the code and create a new file. Once the file is created most of the code will no longer execute, but should still be deleted or commented out for future use.

Note: use `get_stylesheet_directory()` that refers to the current active child theme’s root directory. You should never use `get_template_directory()`, since this would use the parent theme’s folder which would remove any custom created upon a theme update.

Other resources:
 - [Creating new files in the WordPress theme editor](https://chap.website/creating-new-files-in-the-wordpress-theme-editor/)
