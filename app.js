const http = require('http');

const server = http.createServer((request, response) => {
    response.write('Hola Mundo');
    response.end();
});

server.listen(3000);

console.log('Escuchando en el puerto 3000');