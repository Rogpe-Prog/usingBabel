# Using Babel to run ES6+ on the browser dosen't support

## Install packages:

* "@babel/cli": "^7.13.0",
* "@babel/core": "^7.13.8",
* "@babel/preset-env": "^7.13.9"

## After that create file <b>.babelrc</b> and insert the code of line:

<p>{</p>
    <p>"presets": ["@babel/preset-env"]</p>
<p>}</p>

## After go to package.json and edit putting:

  "scripts": {
    "dev": "babel ./main.js -o bundle.js -w"
   }

## After that run:
* yarn dev

### In your index.html putting on the tag script the <b>"bundle.js"</b>, because that file
### is the file transpiled by babel

<!--- Look!!! that is fantastic you can user the newest version of JS on browser doesn't support  --->