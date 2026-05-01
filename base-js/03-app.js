//let http = require('http');
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Olá Mundo!\n');
});

// starts a simple http server locally on port 3000
const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log('Escutando em ' + hostname + ':' + port);
});
// run with `node 03-app.mjs`