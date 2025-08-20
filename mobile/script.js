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
                alert(`${item.nome} adicionado ao carrinho!`);
                window.location.href = 'carrinho.html';
            });
        });
    }
});