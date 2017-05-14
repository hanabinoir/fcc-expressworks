var express = require('express');
var app = express();

app.get('/search', function (req, res) {
    var query = req.query;
    var obj = {};
    for (key in query) {
        obj[key] = query[key];
    }
    res.send(obj);
})

app.listen(process.argv[2]);
