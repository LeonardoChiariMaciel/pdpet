function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    container.innerHTML = '';

    let total = 0;

    cart.forEach((item, i) => {
        total += item.preco * item.quantidade;
        const article = document.createElement('article');
        article.classList.add('cart-item');

        article.innerHTML = `
            <article class="clamp-mobile card bg-light-80 d-flex flex-row justify-content-center rounded-3 mb-2">
                <a href="produto.html" class="text-decoration-none">
                    <img class="icon-6-2 m-2 rounded-3" src="${item.imagem}">
                </a>
                <div>
                    <h5 class="f12 bold mt-4">${item.nome}</h5>
                    <div class="d-flex flex-row align-items-center justify-content-between me-2 gap-2">
                        <input data-index="${i}" class="incrementador form-control min-w-2 w-25 rounded-3 f12" type="number" value="${item.quantidade}" min="1" step="1">
                        <p class="f12 medium">R$ ${item.preco.toFixed(2)}</p>
                        <img class="icon-1 remove-item" data-index="${i}" src="imgs/icones/recycle-bin.png"> <!-- adicionado data-index -->
                    </div>
                </div>
            </article>
        `;

        container.appendChild(article);
    });

    document.getElementById('cart-total').innerText = "Total: R$ " + total.toFixed(2);
    localStorage.setItem('atual_total', total);

    // Eventos de remover e alterar quantidade
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const i = parseInt(btn.dataset.index); // resolvido o problema de deletar só o primeiro
            cart.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });

    //Eventos de incrementar e decrementar quantidade
    document.querySelectorAll('.incrementador').forEach(entrada => {
        entrada.addEventListener('change', () => {
            const i = parseInt(entrada.dataset.index); //permanece fixo apos remocoes
            const novaQtd = parseInt(entrada.value);

            if(novaQtd > 0){
                cart[i].quantidade = novaQtd
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); //recalcula o total
            }
            else{
                entrada.value = cart[i].quantidade;
            }
        })
    })
}

// Renderiza o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', renderCart);
