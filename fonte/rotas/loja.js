const express = require('express');
const lojaRotas = express.Router();
const axios = require('axios');

lojaRotas.get('/:nomeLoja', async(req, res) => {

    try {
        const nomeLoja = req.params.nomeLoja;
        const dadosLoja = await axios.get(`http://localhost:4444/lojas/carregar/${nomeLoja}`);
        console.log(dadosLoja);
        res.render('loja', { loja: dadosLoja.data});
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