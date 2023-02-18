const express = require('express');
const router = new express.Router();
/*
 * Catch-all route
*/
router.get('*', (req, res) => {
    const uriScheme = [];
    router.stack.forEach(function(r){
        if (r.route && r.route.path && r.route.path !== '*'){
            const method = {
                resource: r.route.path,
                httpMethod: r.route.stack[0].method
            };
            uriScheme.push(method);
        };
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

module.exports = router;