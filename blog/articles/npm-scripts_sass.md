# NPM Scripts for SASS

1. use sass to compile scss to css

```
npm install --save-dev sass
```

```
"scripts": {
  "sass-dev": "sass --watch --update --style=expanded css:css",
  "sass-prod": "sass --no-source-map --style=compressed css:css"
}
```

2. Autoprefix CSS with PostCSS

```
npm install --save-dev postcss-cli autoprefixer
```

```
"scripts": {
  ...
  "autoprefixer": "postcss -u autoprefixer -r dist/css/*"
}
```

This task says: Hey postcss, use (-u flag) autoprefixer to replace (-r flag) any `.css` files in `dist/css` with vendor prefixed code. That’s it! Need to change the default browser support for autoprefixer? It’s easy to add to the script:

```
"autoprefixer": "postcss -u autoprefixer --autoprefixer.browsers '> 5%, ie 9' -r dist/css/*"
```

Or add browser support separately, after scripts

```
"browserslist": [
    "last 4 versions"
],
```

3. Group the tasks by combining CSS tasks

```
"build:css": "npm run scss && npm run autoprefixer"
```

4. Watching for changes

use onchange package
```
npm i -D onchange
```
```
"scripts": {
  ...
  "watch:css": "onchange 'src/scss/*.scss' -- npm run build:css"
}
```

5. Final Scripts:
```
"devDependencies": {
    "autoprefixer": "^10.4.4",
    "cssnano": "^5.1.7",
    "onchange": "^7.1.0",
    "postcss": "^8.4.12",
    "postcss-cli": "^9.1.0",
    "sass": "^1.49.9"
},
"scripts": {
    "sass": "sass --update --style=expanded assets/sass:assets/css",
    "postcss": "postcss -u autoprefixer -r assets/css/*.css",
    "build:css": "npm run sass && npm run postcss",
    "watch": "onchange 'assets/sass/*.scss' -- npm run build:css"
},
"browserslist": [
    "last 4 versions"
],
```

Resources:
 - [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)
 - [npm with node-sass and autoprefixer](https://stackoverflow.com/questions/35197836/npm-with-node-sass-and-autoprefixer)


