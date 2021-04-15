const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// import chave from '../../../index.js'
// const 
// console.log(chave);

const Identificacao = "Loja-Andre";

const loja = urlParams.get(`/lojas/carregar/${Identificacao}`); //raiz da requisição

const URLLoja = "http://localhost:4444";


const getLoja = function getLoja() {
    axios({
        method: "get",
        url: `${URLLoja}/lojas/carregar/${Identificacao}`
    })

        .then((response) => {
            console.log(chave);


            let loja = response.data;     
            let chaveIdentificacaoLoja = loja.chaveIdentificacao;
            let chaveLoja = chaveIdentificacaoLoja.chave;
            let splitLoja = chaveLoja.split("-");
            let nomeLoja = splitLoja.join(" ");
            console.log(nomeLoja);
            document.getElementById("nomeLoja").innerHTML = `${nomeLoja}`;
            document.getElementsByClassName("nomeLoja").innerHTML = nomeLoja;
            console.log(loja);
            
        }).catch(error => {
            console.log(error);
        })
}

// module.exports = getLoja();