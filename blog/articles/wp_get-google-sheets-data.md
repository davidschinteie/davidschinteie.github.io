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

8. Add fallback for timeout error

A number of scenarios may cause the cURL to time out in WordPress. (including poor network connection or a poorly configured hosting server)

```
cURL error 28: Operation timed out after 5000 milliseconds with 0 bytes received
```

9. Usage limits
 
*As the Google Sheets API is a shared service, we apply quotas and limitations to make sure it's used fairly by all users and to protect the overall health of the Google Workspace system.*

*If you exceed a quota, you'll generally receive a 429: Too many requests HTTP status code response. If this happens, you should use an exponential backoff algorithm and try again later. Provided you stay within the per-minute quotas below, there's no limit to the number of requests you can make per day.*

*The following table details the request limits:*
| Quotas |  |
| ----------- | ----------- |
| Read requests | |
| Per day per project | Unlimited |
| Per minute per project | 300 |
| Per minute per user per project | 60 |
| Write requests | |
| Per day per project | Unlimited |
| Per minute per project | 300 |
| Per minute per user per project | 60 |

### Pricing
*All use of the Sheets API is free of charge. Exceeding the quota request limits doesn't incur extra charges and your account is not billed.*

Other resources:
 - [Google Sheet Integration with WordPress without Plugin](https://phpcoder.tech/google-sheet-integration-with-wordpress-without-plugin/)
 - [Google Sheet for Developers - Usage limits](https://developers.google.com/sheets/api/limits)
