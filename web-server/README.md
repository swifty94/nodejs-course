31.01 webserver structure
<pre>
AppRoot:.
|   keys-default.json
|   keys.json
|   package-lock.json
|   package.json
|   README.md
|
+---public
|   |   about.html
|   |   geolocation.html
|   |   index.html
|   |   weather.html
|   |
|   \---img
|           readme.png
|
+---src
|       app.js
|
\---utils
        api.js
        help.js
</pre>

- Requirements:

https://nodejs.org/en/download/

- Install:

<pre>
 - npm install
 - mv keys-default.json keys.json
 - put your own relevant keys into the respective sections for https://api.mapbox.com/ and https://api.weatherapi.com/ (Free subscription, no card required)
 - put Location of your choice in the keys.json respective section
</pre>

- Run:

<pre>
~ \web-server>node src/app.js
----------------------------------------------------------------
Starting Express web-server...
Serving on: http://localhost:3000
</pre>

- RESULT:

![](https://github.com/swifty94/nodejs-course/blob/master/web-server/sample.gif)