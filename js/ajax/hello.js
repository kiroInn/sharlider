var http = require('http');
http.createServer(function (req, res) {
    console.log(req.headers)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // res.writeHead(200, {"Content-Type": "application/json"});
    res.writeHead(200, {"Content-Type": "text/html"})
    // var people = {
    //     id: '123',
    //     name: 'Kiro Li'
    // };
    // res.end(JSON.stringify(people));
    var template = `<html><body style="background-color: deeppink">hello world</body></html>`
    res.end(template)
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');