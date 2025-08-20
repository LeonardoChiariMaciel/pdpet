function toggleArticle(articleID) {

    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        if (article.id !== articleID)
            article.style.display = 'none';
    });

    const article = document.getElementById(articleID);
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}


function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        document.getElementById('cart-link').innerHTML = `
            <img src="imgs/icones/carrinho.png" alt="Carrinho" class="menu-icon icon-2">
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-carrinho');

    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();

                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                const itemName = btn.dataset.name || 'Item';
                const itemPrice = parseFloat(btn.dataset.price) || 0;
                const itemImage = btn.dataset.image || '';

                const item = {
                    nome: itemName,
                    preco: itemPrice,
                    imagem: itemImage,
                    quantidade: 1
                };

                const existing = cart.find(i => i.imagem === item.imagem);
                if (existing) {
                    existing.quantidade += 1;
                } else {
                    cart.push(item);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                
                // window.location.href = 'carrinho.html';

                const cartToastContainer = document.getElementById('cart-toast-container')
                cartToastContainer.innerHTML = `
                    <div id="liveToast" class="toast align-items-center rounded-3" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-success-subtle">
                            <strong class="me-auto">Item adicionado ao carrinho</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body bg-light rounded-3">
                            ${itemName}
                        </div>
                    </div>
                    `;

                const toastLiveExample = document.getElementById('liveToast')
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastBootstrap.show()
                updateCartIcon()
            });
        });
    }

    
    updateCartIcon();
});
