// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
const categoria = urlParams.get("categorias/listar/10"); //raiz da requisição

const URLCategoria = "http://localhost:3333";

getCategoria();

function getCategoria() {
    axios({
        method: "get",
        url: `${URLCategoria}/categorias/listar/10`
    })

        .then((response) => {
            let categorias = response.data;
            let n = 1;
            categorias.forEach(categoria => {
                let item = document.createElement("section");
                item.innerHTML = `
                <section id="section-${n}">
                    <h4>${n}. ${categoria.nome}</h4>
                    <div class="table_wrapper">
                    <table class="table cart-list menu-gallery"  id="${categoria._id}"></table>
                    </div>
                <!-- /row -->
                </section>                
                `; 
                document.getElementById("nomeCategoria").appendChild(item);
                

                let cat = document.createElement("a");
                cat.innerHTML = `
                <a href="#section-${n}">${categoria.nome}</a>
                `;
                document.getElementById("navCategoria").appendChild(cat);

                n++;
            });            
        }).catch(error => {
            console.log(error);
        })
}