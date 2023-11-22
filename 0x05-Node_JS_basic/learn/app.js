#!/use/bin/node

const http = require('http')

const host = '127.0.0.1'
const port = '3000'


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello');
});

server.listen(port, host);
