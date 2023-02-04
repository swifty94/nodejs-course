05.02 Result

<pre>
AppRoot:.
|   package-lock.json
|   package.json
|   README.md
|   sample.gif
|   sample1.png
|   sample2.png
|   settings-default.json
|   settings.json
|
+---public
|   +---css
|   |       main.css
|   |
|   +---img
|   |       bg.jpg
|   |       city.png
|   |       cloud.png
|   |       country.jpg
|   |       country.png
|   |       feels_like.png
|   |       humidity.png
|   |       pressure.png
|   |       temp_c.png
|   |       temp_f.png
|   |       time.png
|   |       wind.jpg
|   |       wind.png
|
+---src
|       app.js
|
+---utils
|       api.js
|       settings.js
|
\---views
        index.hbs
        weather.hbs
</pre>

- Requirements:

- install NodeJS if not already installed from here https://nodejs.org/
- sign up on Weather API here https://www.weatherapi.com/pricing.aspx ang get your API key
(free, no credit card needed)

- Install:

<pre>
- rename your app-default.json to app.json
- open the app.json and put your WEATHER_API_KEY. APP_PORT can be left as is if you not sure what to use.
- open terminal (if you are on MacOS or Linux) or CMD/Powershell if you are on Windows.
- go to the application directory (e.g., cd /Desktop/weather-app-2.0/)
- run npm install
</pre>

- Run:

<pre>
- after the installation in the same directory run:

~ \weather-app-2.0>node src/app.js
----------------------------------------------------------------
Starting Express web-server...
Serving on: http://localhost:3000
</pre>

- RESULT:

![](https://github.com/swifty94/nodejs-course/blob/master/weather-app-2.0/sample1.png)


![](https://github.com/swifty94/nodejs-course/blob/master/weather-app-2.0/sample2.png)
