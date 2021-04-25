const express = require('express');
const lojaRotas = express.Router();
const axios = require('axios');

lojaRotas.get('/:nomeLoja', async(req, res) => {

    try {
        const nomeLoja = req.params.nomeLoja;
       
       const [dadosLoja] = await Promise.all([axios.get(`https://ms-delivery-online.herokuapp.com/lojas/carregar/${nomeLoja}`)]);

       const loja = dadosLoja.data;
       const idProprietario = loja.idProprietario;

       const dadosCategoria = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/categorias/listar/${idProprietario}`);
       const categorias = dadosCategoria.data;

       const dadosProdutos = await axios.get(`https://ms-catalogo-de-produtos.herokuapp.com/produtos/listar/${idProprietario}`);
       const produtos = dadosProdutos.data;

       const dadosUsuarios = await axios.get(`http://localhost:2222/pessoas/listar/${idProprietario}`);
       const usuarios = dadosUsuarios.data;

       res.render('index', { loja: loja, categorias: categorias, produtos: produtos, usuarios: usuarios});
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