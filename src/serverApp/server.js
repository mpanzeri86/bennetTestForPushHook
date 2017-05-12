var restify = require('restify');

function loadTotem(req, res, next) {
    console.log('totem id %s', req.params.id);
    res.send('hello ' + req.params.id);
    next();
}

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());

server.get('/totem/:id', loadTotem);

server.get(/.*/, restify.serveStatic({
    directory: 'public',
    default: 'prenotazioni.html'
}));

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});