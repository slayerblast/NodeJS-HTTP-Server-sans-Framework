const http = require('http');

const server = http.createServer((req, res) => {

  try{
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.writee('<h1>HELLO WORLD HERY</h1>');
      
    }
    else{
    res.writeHead(404, {'content-type':'text/html'});
    res.write('<h1>404 Page Introuvable</h1>');
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Erreur Interne au Serveur</h1>');
  }

  
      
    res.end()
})

server.listen(5000);
console.log('Server écoute sur le port 5000');  