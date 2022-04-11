# Google Sheet Integration with WordPress without Plugin

1. Create or Select a Google Api project from [https://console.developers.google.com/](https://console.developers.google.com/)

2. Enable the sheets API

3. Create a new API key

4. Make sheet Shareable

5. Get the spreadsheet ID from url

6. Create a function for getting Data from Sheet in functions.php

```
function get_sheet_value_shortcode($atts) {
	$API = '[Insert API Key Here]';
	$google_spreadsheet_ID = '[Insert Google Spreadsheet ID Here]';
	$api_key = esc_attr( $API);
	 
	$location = $atts['location'];
	 
	$get_cell = new WP_Http();
	$cell_url = "https://sheets.googleapis.com/v4/spreadsheets/$google_spreadsheet_ID/values/$location?&key=$api_key";
	$cell_response = $get_cell -> get( $cell_url);
	$json_body = json_decode($cell_response['body'],true);
	$cell_value = $json_body['values'];
	return $cell_value;
}
add_shortcode('get_sheet_value', 'get_sheet_value_shortcode');
```

7. Use the shortcode on WP pages
with Specified Cell Location from Google Sheet

```
[get_sheet_value location="Sheet1!A2"]
```

Other resources:
 - [Google Sheet Integration with WordPress without Plugin](https://phpcoder.tech/google-sheet-integration-with-wordpress-without-plugin/)
