const http = require('http');

const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req,res) => {
    console.log(req.headers);
})