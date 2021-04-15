const produto = urlParams.get("produtos/listar/10"); //raiz da requisição

getProduto();

function getProduto() {
    axios({
        method: "get",
        url: `${URLCategoria}/produtos/listar/10`
    })
        .then((response) => {
            let produtos = response.data;
            var n = 0;
            produtos.forEach(produto => {
                let idProduto = produto._id;
                let nomeProduto = produto.nome;
                let idCategoria = produto.categorias;
                let paineisModificacao = produto.paineisModificacao;

                console.log(produto.nome);
                

                let itemP = document.createElement("tr");

                itemP.innerHTML = `
                    <td class=" d-md-flex align-items-center">
                        <figure>
                            <a href="img/menu_item_large_1.jpg" title="Photo title" data-effect="mfp-zoom-in"><img
                                    src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="thumb" class="lazy"></a>
                        </figure>
                        <div class="flex-md-column">
                            <h4>${nomeProduto}</h4>
                            <p>${produto.descricao}</p>
                        </div>
                    </td>
                    <td>
                        <strong>R$ ${produto.valor1}</strong>
                    </td>

                    
                    <td class="options">
                        <div class="dropleft dropdown-options">
                        <a href="#" data-toggle="modal" data-target="#modal-${idProduto}" class="modal-modificacao modal_dialog"><i class="icon_plus_alt2"></i></a>
                        </div>

                        <!-- MODIFICACOES -->
                        <!-- MODAL PRODUTO -->
                        <div class="modal fade" id="modal-${idProduto}" tabindex="-1" role="dialog">
                        <div class="modal-dialog modal-dialog-centered menu_item" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="modal-${idProduto}">${nomeProduto}</h5>
                              <button type="button" class="btn_1 btn-fechar" data-dismiss="modal" aria-label="Fechar">
                                <i class="icon_close"></i>
                              </button>
                            </div>
                            <container class="none">
                            <div class="modal-body">
                              <div class="imgModificacao"><img src="img/home_cat_placeholder.jpg" class="img-fuid"></div>
                              
                              <!-- AQUI AS MODIFICAÇÕES SÃO INSERIDAS -->
                              <div id="modificação-${n}"></div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn_1"  data-dismiss="modal" onclick="addLolo()">Adicionar Produto</button>
                            </div>
                            </container>
                          </div>
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                    </td>               
                `;
                               
                document.getElementById(idCategoria).appendChild(itemP);

                if ( paineisModificacao.length === 0 ) {
                  console.log("esse produto não tem painel");
                } else {
                  paineisModificacao.forEach(painel => {
                  let nomePainel = painel.nome;
                  let div = document.createElement("div");
                  div.innerHTML = `
                  <p>${nomePainel}</p>
                  `
                  document.getElementById("modificação-" + n).appendChild(div);
                  console.log(painel.nome);
                });
                }
                console.log("----------------");
                
n++; 

                
            });


        }).catch(error => {
            console.log(error);
        })
}

