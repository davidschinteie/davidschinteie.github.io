# Useful React Snippets of Code

## Run React App production build locally

```
npm install -g serve
npm run build
serve -s build
```

The build script is building your entire app into the build folder, ready to be statically served. However actually serving it require some kind of static file server, like the one they propose.

After running the command serve -s build you can access your production build at localhost (on the specified port).

## Adding polyfills

In index.tsx file:
```
import './src/utils/polyfills';
```

And in /src/utils/polyfills.js:
```
//example of polyfill:
if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
```

Other resources:
 - [How to run production react app in local with local back-end](https://stackoverflow.com/questions/56948975/how-to-run-production-react-app-in-local-with-local-back-end)
 - [Add Polyfills for ES6 Features in React App that is Created with create-react-app](https://thewebdev.info/2021/09/21/how-to-add-polyfills-for-es6-features-in-react-app-that-is-created-with-create-react-app/)
