# Sort an array with special characters in PHP (spanish)

## The Problem

I have a list of spanish studens and I have to sort their names alphabetically.

I used a simple sorting function:

```
$all_students = get_all_students();

function compareByName($scholar_students, $b) {
	return strcmp($scholar_students["Name"], $b["Name"]);
}

usort($all_students, 'compareByName');
```

The expected output would be in this order:

```
Abigail Ivett Fajardo Ortega
Adán Higuera Arellano
Álvaro Isaí Castro López
Ángel César Vega Castillo
Ana Gabriela Leyva Diego
```

However, this is what I'm receiving:

```
Abigail Ivett Fajardo Ortega
Adán Higuera Arellano
Ana Gabriela Leyva Diego
...
Zulma Jaquelin Meléndez Machado
Álvaro Isaí Castro López
Ángel César Vega Castillo
```

## Solution

I used sorting by translitterated names:

```
function compareByName($scholar_students, $b) {
	$at = iconv('UTF-8', 'ASCII//TRANSLIT', $scholar_students["Name"]);
	$bt = iconv('UTF-8', 'ASCII//TRANSLIT', $b["Name"]);
  return strcmp($at, $bt);
}
```

Note: A similar solution would be to use Collator class, that was developed in PHP for this explicit purposes. 
However, for this to work, you'll need to install the PHP Internationalization extension (Intl)

Resources:
 - [Sort an array with special characters in PHP](https://stackoverflow.com/questions/10649473/sort-an-array-with-special-characters-in-php)
