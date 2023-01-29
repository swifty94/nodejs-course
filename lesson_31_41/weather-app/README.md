- 28.01 moduling a project with:
 - separation of the logic
 - take out tokens from code
 - refactoring to callback type of functions
 - add another yarg
 - refactor main

- New structure:

<pre>
AppRoot:.
|   app.js
|   keys-default.json
|   package-lock.json
|   package.json
|   README.md
|
\---utils
        geo-api.js
        help.js
        weather-api.js
</pre>

- Usage:
    - rename keys-default.json to keys.json
    - put your relevant keys to api.weatherapi.com and api.mapbox.com ( they are free :) )
    - run "npm install" in the root AppRoot (depends on where you unpacked the package after downloading)
    - see examples of usage below.

- RESULT:

 ![](https://github.com/swifty94/nodejs-course/blob/master/lesson_31_41/weather-app/result.png)