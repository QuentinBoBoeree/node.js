/**
 * Created by user on 2017/6/13.
 */
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
        response.status = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('first node server\n');
    }
);

server.listen(port, host, () => {
        console.log(`服务器运行在 http://${host}:${port}/`);
    }
);