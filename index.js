const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Set .env for heroku
require('dotenv').config({path: '.env'});
const port = process.env.PORT || 3000;

// Set body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating engine engine
app.set('views', './fonte/views');
app.set('view engine', 'ejs')


// Rotas
app.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        // checa se o header é HTTP ou HTTPS
        res.redirect("https://" + req.headers.host + req.url);
        // faz o redirect para HTTPS
    } else {
        next();
        // segue com a sequência das rotas
    }
});

const lojaRotas = require('./fonte/rotas/loja')
app.use('/', lojaRotas);

app.get("/error", (req, res) => {
    res.render("error404");
});

app.listen(port, () => {
    console.log('Umbler listening on port %s', port);
});