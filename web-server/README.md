03.02 web-server structure

<pre>
AppRoot:.
|   keys-default.json
|   keys.json
|   package-lock.json
|   package.json
|   README.md
|   sample.gif
|
+---public
|   +---css
|   |       main.css
|   +---img
|   |       readme.png
|   \---js
|           client.js
+---src
|       app.js
+---utils
|       api.js
|       help.js
\---views
        about.hbs
        geo.hbs
        index.hbs
        weather.hbs

</pre>

- Requirements:

https://nodejs.org/en/download/

- Install:

<pre>
 - run 'npm install' in terminal or cmd inside the root folder of the project
 - rename keys-default.json keys.json
 - put your own relevant keys into the respective sections for

        https://api.mapbox.com/
        https://api.weatherapi.com/

 Both have free subscription, no card required :)

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
