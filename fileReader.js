var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, data) {
        if (err) {
            return res.sendStatus(500);
        }

        try {
            var json = JSON.parse(data);
            res.json(json);
        } catch (err) {
            res.sendStatus(500);
        }
    })
})

app.listen(process.argv[2]);
