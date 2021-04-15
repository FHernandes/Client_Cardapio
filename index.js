const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// View engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var identificacaoLoja;

app.get("/:nomeLoja", (req, res) => {
    identificacaoLoja = req.params.nomeLoja;
    res.render("index");
})

app.listen(1010, () => {
    console.log("O servidor da interface está rodando!!!");
});

// module.exports = indexLoja;
// export const chave = indexLoja;
