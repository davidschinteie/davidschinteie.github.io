# WodrPress Database interaction

1. Add `global $wpdb;` in the function where you want to use WordPress database 

2. Get results and check if is not empty

```
$get_values = $wpdb->get_results("SELECT * FROM wp_db_values");
if(!empty($get_values)){
  // your code
  $value = $get_values[0] -> value;
}
```

3. Insert values

```
$wpdb->insert('wp_db_values', array("id" => 1, "value" => $value), array("%s", "%s"));
```

where `array("%s", "%s")` stands for format

4. Update values

```
$wpdb->update('wp_db_values', array("value" => $value), array('id' => 1), array('%s'));
```

where `array('id' => 1)` stands for where clause in sql query

5. Save and retrieve an array in mysql database using mysql json data type

```
// for insert/update
$json = json_encode($value);
$wpdb->update('wp_db_values', array("arr_value" => $json), array('id' => 1), array('%s'));

// for getting/reading the json value
$get_values = $wpdb->get_results("SELECT * FROM wp_db_values");
if(!empty($get_values)){
  // your code
  $value = json_decode($get_values[0] -> arr_value);
}
```

6. Debug wpdb insert/update etc

```
$wpdb->last_error //will show you the last error, if you got one.

$wpdb->last_query //will assist you with showing the last query (where the error occurred)
```

Enjoy!:))

Other resources:
 - [How To Interact With The WordPress Database](https://www.smashingmagazine.com/2011/09/interacting-with-the-wordpress-database/)
 - [How to insert data into WordPress database](https://www.davidangulo.xyz/how-to-insert-data-into-wordpress-database/)
 - [How to store array data type in MySQL](https://sebhastian.com/mysql-array/)
 - [Insert Array into MySQL Database using PHP](https://www.kodingmadesimple.com/2017/11/insert-array-into-mysql-database-php.html)