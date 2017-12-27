const http    = require('http');
const express = require('express');
const path    = require('path');

const app     = express();

const port    = 3000;

app.use(express.static(path.join(__dirname, '/dist')));

// app.get('/',(req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.json({'name':'teja'});
// })
//
// app.get('/', function(req, res) {
//   console.log(__dirname + '/dist/index.html');
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

app.get('/*', function(req, res) {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.json({'name':'teja varma get call'});
});
app.post('/*', function(req, res) {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.json({'name':'teja varma post call'});
});

app.listen(port,() => console.log("started"));

//
// const server = http.createServer((req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// })
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// })
