const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    //parse url
    const parsedUrl = url.parse(req.url, true);

    // get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    res.setHeader('Content-Type', 'text/html');
    res.end('Request pathname: '+trimmedPath+' with HTTP method: '+method+' and this query string: '+ JSON.stringify(queryStringObject));
})

server.listen(3000);