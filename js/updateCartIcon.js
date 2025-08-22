function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        document.getElementById('cart-link').innerHTML = `
            <img src="../imgs/icones/carrinho.png" id="icone-carrinho-header" alt="Carrinho" class="menu-icon icon-2">
        `;
    } else {
        let carrinho = document.getElementById("icone-carrinho-header")
        if (carrinho) {
            document.getElementById('cart-link').removeChild(carrinho)
        }
    }
}

updateCartIcon();