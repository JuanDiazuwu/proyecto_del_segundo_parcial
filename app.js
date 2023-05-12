const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

    const file = request.url == '/' ? './www/index.html' : `./www${request.url}`;

    fs.readFile(file, (err, data) => {
         if(err){
            response.writeHead(404, {"Content-Type":"text/html"});
            response.write("Not found");
            response.end();
         } else {
            const extension = request.url.split('.').pop();

            switch(extension){
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plane"});
                    break;

                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                    break;

                case 'css':
                    response.writeHead(200, {"Content-Type":"text/css"});
                    break;

                case 'ico':
                    response.writeHead(200, {"Content-Type":"image/x-icon"});
                    break;

                case 'js':
                    response.writeHead(200, {"Content-Type":"text/javascript"});
                    break;

                case 'jpeg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                    break;

                default:
                    response.writeHead(200, {"Content-Type":"text/html"});
            }
            response.write(data);
            response.end();
         }
    })

}).listen(8888);