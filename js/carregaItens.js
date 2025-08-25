function carregaItensLista(items, type, containerId) {
    const container = document.getElementById(containerId);
    if (container === null) {
        console.error("Container not found:", containerId);
        return;
    }

    for (const element of items) {
        if (element.type === type) {
            const item = document.createElement("article");
            item.className = "clamp-mobile bg-light-80 card d-flex flex-column align-items-center m-auto rounded-3";
            item.innerHTML = `
                <a href="item.html?id=${element.id}" class="w-95 m-2">
                    <img class="w-100 rounded-3" src="${element.image}" alt="${element.title}">
                </a>
                <a href="item.html?id=${element.id}" class="text-decoration-none link-dark">
                    <p class="f12 medium px-3">${element.title}</p>
                </a>
                <div class="w-75 d-flex flex-row justify-content-between align-items-center pb-3">
                    <p class="f14 semibold mb-0">R$ ${element.price.toFixed(2)}</p>
                    <a href="carrinho.html"
                        class="text-decoration-none add-carrinho"
                        data-name="${element.title}"
                        data-price="${element.price.toFixed(2)}"
                        data-image="${element.image}">
                        <img src="../imgs/icones/carrinho.png" class="icon-2-5" alt="Adicionar ao carrinho">
                    </a>
                </div>
            `;
            container.appendChild(item);
        }
    }
}

function carregaItem(items) {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    const item = items.find(item => item.id == itemId);

    if (!item) {
        console.error("Item not found with ID:", itemId);
        return;
    }

    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-image').src = item.image;
    document.getElementById('item-image').alt = item.title;
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-price').textContent = `R$ ${item.price.toFixed(2)}`;

    const addCartLink = document.getElementById('add-to-cart-link');
    addCartLink.setAttribute('data-name', item.title);
    addCartLink.setAttribute('data-price', item.price.toFixed(2));
    addCartLink.setAttribute('data-image', item.image);
}

function carregaItensCarrossel(items, type, quantity, containerId) {
    const container = document.getElementById(containerId);
    if (container == null) {
        console.error("Container not found:", containerId);
        return;
    }
    let itemCounter = 0;

    for (const element of items) {
        if (element.type == type) {
            let item = document.createElement("div");
            item.className = "unidade-carrossel ps-1 pe-1";
            item.innerHTML = `
                <img class="estrelas mt-2 ms-1" src="../imgs/icones/estrelas adap.png">
                <a href="item.html?id=${element.id}" class="text-decoration-none">
                    <img class="img-produto rounded-3 py-1" src="${element.image}">
                </a>
                <a href="carrinho.html" 
                    class="text-decoration-none add-carrinho"
                    data-name="${element.title}"
                    data-price="${element.price.toFixed(2)}"
                    data-image="${element.image}">
                    <img class="botao-mais" src="../imgs/icones/mais.png" alt="Adicionar ao carrinho">
                </a>
                <a href="item.html?id=${element.id}" class="text-decoration-none text-black">
                    <p class="f8 regular">${element.title}</p>
                    <br>
                    <p class="f10 medium position-absolute bottom-0 pb-1">R$ ${element.price.toFixed(2)}</p>
                </a>
            `;
            container.appendChild(item);
            itemCounter++;
        }
        if (itemCounter >= quantity) {
            break;
        }
    }
}

function addCarrinhoListener() {
    
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
}