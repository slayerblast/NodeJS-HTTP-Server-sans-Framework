const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>HELLO WORLD HERY</h1>');
      }
    else{
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Page Introuvable</h1>');
    }  
    res.end()
})

server.listen(5000);
console.log('Server écoute sur le port 5000');  