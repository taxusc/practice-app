const http = require('http');
const fs = require('fs');

const server = http.createServer(getFromClient);

server.listen(3000);
console.log('server start');

function getFromClient(request, response){
    fs.readFile('./index.html', 'UTF-8', 
        (error, data)=>{
            let content = data.
                replace(/dummy_title/g, 'タイトルです。').
                replace(/dummy_content/g, 'これがコンテンツです。');

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
        }
    )
}