const express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http'),
    server = http.createServer(app),
    bodyParser = require('body-parser'),
    compression = require('compression');
var cors = require('cors')


app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(bodyParser.json());

app.use(compression({
    level: 9
}));


app.use(cors())
app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');

    next();
});

app.use(express.static(path.resolve('dist/htf-angular')));

app.get(/^((?!\/(api|administrator)).)*$/, (req, res) => {
    res.sendFile(path.resolve('dist/htf-angular/index.html'));
});

/*Listen on Server Port*/
server.listen(4050, () => {
    console.log('listening on', server.address().port);
});