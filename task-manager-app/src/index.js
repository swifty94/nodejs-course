const express = require('express');
const os = require('os');
const userRoute = require('./routers/user');
const taskRoute = require('./routers/task');
const catchAllRoute = require('./routers/catch-all');
const HOST = os.hostname();
const _PORT = process.env.PORT || 3000;
const URL_BASE = `http://${HOST}:${_PORT}/`;
/*
 * Initialize the express server
*/
const app = express();
app.use(express.json());
app.use(userRoute);
app.use(taskRoute);
/*
 * Catch-all route
*/
app.get('*', (req, res) => {
    const uriScheme = [];
    routes = [userRoute, taskRoute]
    routes.forEach(route => {
        route.stack.forEach(function(r){
            if (r.route && r.route.path){
                const method = {
                    resource: r.route.path,
                    httpMethod: r.route.stack[0].method
                };
                uriScheme.push(method);
            };
        });
    });
    const description = {
        'AvailableResources' : uriScheme,
        'NOTES': {
            1: 'To do GET request click on method on this page.',
            2: 'Use cURL, Postman/SOAP UI or any other tool to perform POST/PATCH/DELETE requests'
        }
    };
    res.send(description);
});

app.listen(_PORT, () => {
    console.log(`Server is running on ${URL_BASE}`);
});