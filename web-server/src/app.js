const path = require('path');
const express = require('express');
const publicFolder = path.join(__dirname, '../public');
//console.log(publicFolder)
const app = express();
app.use(express.static(publicFolder));

app.get('/weather', (req, res) => {
    res.send([
        {
            'location': 'Kiev',
            'temp': '-2 C'
        }
    ]);
});

app.listen(3000, () => {
    console.log(`Starting application on port 3000`);
})