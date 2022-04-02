const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(response);

    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.writeHead(200, { 'Content-Type': 'application/json' });

    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });
    
    // const persona = {
    //     id: 1,
    //     nombre: 'Alex Maldonado'
    // };

    // response.write(JSON.stringify(persona));

    response.write('Hola Mundo');

    response.end();
});

server.listen(3000);

console.log('Escuchando en el puerto 3000');