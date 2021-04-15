addProduto();

function addProduto() {
    axios({
        method: "get",
        url: `${URL}/produtos/listar/10`
    })
        .then((response) => {
            let produtoss = response.data;

            produtoss.forEach(produto => {
                let idProdutos = produto._id;
                let nomeProdutos = produto.nome;
                
                let itemAddProduto = document.createElement("div");
                
                itemAddProduto.innerHTML = `
                <!-- MODAL PRODUTO -->
                <div id="adicionaProduto" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                       <h5 class="modal-title">${nomeProdutos}</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                           <span aria-hidden="true">&times;</span>
                       </button>
                       </div>
                       <div class="modal-body">
                            <h5>Popover em um modal</h5>
                            <p>Este <a href="#" role="button" class="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui.">botão</a> aciona um popover, ao clicar nele.</p>
                            <hr>
                            <h5>Tooltips em um modal</h5>
                            <p><a href="#" class="tooltip-test" title="Tooltip">Este link</a> e <a href="#" class="tooltip-test" title="Tooltip">este outro</a> mostra tooltips, quando passamos o mouse sobre eles.</p>
                        </div>
                       <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                       <button type="button" class="btn btn-primary">Salvar mudanças</button>
                       </div>
                   </div>
                   </div>
               </div>
                `

                document.getElementById(idProdutos).appendChild(itemAddProduto);



            });


        }).catch(error => {
            console.log(error);
        })
}

