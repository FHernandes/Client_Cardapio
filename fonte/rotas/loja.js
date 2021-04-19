const express = require('express');
const lojaRotas = express.Router();
const axios = require('axios');

lojaRotas.get('/:nomeLoja', async(req, res) => {

    try {
        const nomeLoja = req.params.nomeLoja;
       
       const [dadosLoja] = await Promise.all([axios.get(`http://localhost:4444/lojas/carregar/${nomeLoja}`)]);

       const loja = dadosLoja.data;
       console.log(loja);

       const idProprietario = loja.idProprietario;

       const dadosCategoria = await axios.get(`http://localhost:3333/categorias/listar/${idProprietario}`);

       const categorias = dadosCategoria.data;
       console.log(categorias);

       const dadosProdutos = await axios.get(`http://localhost:3333/produtos/listar/${idProprietario}`);

       const produtos = dadosProdutos.data;
       console.log(produtos);

       res.render('index', { loja: loja, categorias: categorias, produtos: produtos});
    } catch (error) {
        if(error.response){
            console.log(error.response.data);
            console.log(erros.response.status);
        }
        else{
            console.error('Error', error.message);
        }
    }
})

module.exports = lojaRotas;