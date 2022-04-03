require('dotenv').config();
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const port    = process.env.PORT;

const baseParameters = {
    nombre: 'Alex Maldonado',
    titulo: 'Curso de Node'
};
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', baseParameters);
});


app.get('/generic', function (req, res) {
    res.render('generic', baseParameters);
    // res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.render('elements', baseParameters);
    // res.sendFile(__dirname + '/public/elements.html');
});


// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World in its own route');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
  