document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/pequeno.json')
        .then(response => response.json())
        .then(animais => {
            console.log('Total de animais:', animais.length);
            
            animais.forEach(animal => {
                console.log('--- Animal ---');
                console.log('ID:', animal.id);
                console.log('ID Article:', animal['id-article']);
                console.log('Nome:', animal.nome);
                console.log('Descrição curta:', animal.descricao_curta);
                console.log('Produtos mais comprados:', animal.mais_comprados.length);
                console.log('');
                let article = document.getElementById(animal['id-article']);
                article.innerHTML = '';
                article.innerHTML = `
                    <div class="informacoes-animal d-flex flex-column gap-4">
                        <div class="d-flex flex-row gap-1 mt-2">
                            <img src="../imgs/animais/gato.jpg" class="foto-animal-vet">
                            <p class="f12 regular">${animal.descricao_curta}</p>
                        </div>
                        <p class="f12 regular">
                            ${animal.descricao_detalhada}
                        </p>

                        <div>
                            <section>
                                <h2 class="ms-2 f12 medium">Mais comprados para ${animal.nome}</h2>
                                <div id="carrossel-id" class="agrupador-de-cards d-flex flex-row gap-2 ms-2 me-1 mt-2">
                                    <div class="unidade-carrossel ps-1 pe-1">
                                        <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                                        <a href="produto.html" class="text-decoration-none">
                                            <img class="img-produto rounded-3 py-1" src="../imgs/produtos/capivara.jpg">
                                        </a>
                                        <a href="carrinho.html" 
                                            class="text-decoration-none add-carrinho"
                                            data-name="Brinquedo Capivara de Pelúcia PD Pet para Cães"
                                            data-price="79.99"
                                            data-image="../imgs/produtos/capivara.jpg">
                                            <img class="botao-mais add-carrinho" src="../imgs/icones/mais.png">
                                        </a>
                                        <a href="produto.html" class="text-decoration-none text-black">
                                            <p class="f8 regular">Brinquedo Capivara de Pelúcia PD Pet para Cães</p>
                                            <br>
                                            <p class="f10 medium position-absolute bottom-0 pb-1">R$ 79,99</p>
                                        </a>
                                    </div>
                                    <div class="unidade-carrossel ps-1 pe-1">
                                        <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                                        <a href="produto.html" class="text-decoration-none">
                                            <img class="img-produto rounded-3 py-1" src="../imgs/produtos/racao-verde.jpg">
                                        </a>
                                        <a href="carrinho.html" 
                                            class="text-decoration-none add-carrinho"
                                            data-name="Ração Golden Seleção Natural para Cães Sênior"
                                            data-price="69.90"
                                            data-image="../imgs/produtos/racao-verde.jpg">
                                            <img class="botao-mais add-carrinho" src="../imgs/icones/mais.png">
                                        </a>
                                        <a href="produto.html" class="text-decoration-none text-black">
                                            <p class="f8 regular">Ração Golden Seleção Natural para Cães Sênior</p>
                                            <br>
                                            <p class="f10 medium position-absolute bottom-0 pb-1">R$ 69,90</p>
                                        </a>
                                    </div>
                                    <div class="unidade-carrossel ps-1 pe-1">
                                        <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                                        <a href="produto.html" class="text-decoration-none">
                                            <img class="img-produto rounded-3 py-1" src="../imgs/produtos/produto 4.jpg">
                                        </a>
                                        <a href="carrinho.html" 
                                            class="text-decoration-none add-carrinho"
                                            data-name="Antipulgas e Carrapatos NexGard Spectra para Cães"
                                            data-price="109.89"
                                            data-image="../imgs/produtos/produto 4.jpg">
                                            <img class="botao-mais add-carrinho" src="../imgs/icones/mais.png">
                                        </a>
                                        <a href="produto.html" class="text-decoration-none text-black">
                                            <p class="f8 regular">Antipulgas e Carrapatos NexGard Spectra para Cães</p>
                                            <br>
                                            <p class="f10 medium position-absolute bottom-0 pb-1">R$ 109,89</p>
                                        </a>
                                    </div>
                                    <div class="unidade-carrossel ps-1 pe-1">
                                        <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                                        <a href="produto.html" class="text-decoration-none">
                                            <img class="img-produto rounded-3 py-1" src="../imgs/produtos/bebedouro.jpg">
                                        </a>
                                        <a href="carrinho.html" 
                                            class="text-decoration-none add-carrinho"
                                            data-name="Bebedouro Fonte Spike Rosa para Cães e Gatos"
                                            data-price="94.99"
                                            data-image="../imgs/produtos/bebedouro.jpg">
                                            <img class="botao-mais add-carrinho" src="../imgs/icones/mais.png">
                                        </a>
                                        <a href="produto.html" class="text-decoration-none text-black">
                                            <p class="f8 regular">Bebedouro Fonte Spike Rosa para Cães e Gatos</p>
                                            <br>
                                            <p class="f10 medium position-absolute bottom-0 pb-1">R$ 94,99</p>
                                        </a>
                                    </div>
                                    <div class="unidade-carrossel ps-1 pe-1">
                                        <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                                        <a href="produto.html" class="text-decoration-none">
                                            <img class="img-produto rounded-3 py-1" src="../imgs/produtos/cama-dicas.jpg">
                                        </a>
                                        <a href="carrinho.html" 
                                            class="text-decoration-none add-carrinho"
                                            data-name="Cama Spike Duplo Cinza"
                                            data-price="104.99"
                                            data-image="../imgs/produtos/cama-dicas.jpg">
                                            <img class="botao-mais add-carrinho" src="../imgs/icones/mais.png">
                                        </a>
                                        <a href="produto.html" class="text-decoration-none text-black">
                                            <p class="f8 regular">Cama Spike Duplo Cinza</p>
                                            <br>
                                            <p class="f10 medium position-absolute bottom-0 pb-1">R$ 104,99</p>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    
                        <div class="botao-de-contato">
                            <p class="f12 semibold text-center">Entre em contato com um especialista</p>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar JSON:', error);
        });
});