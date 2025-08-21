function pagamento () {
    const blocoValor = document.getElementById('total');
    const totalAtual = parseFloat(localStorage.getItem('atual_total'));
    const totalFrete = 10 + totalAtual;
    blocoValor.innerHTML = '';
    blocoValor.innerHTML += `
        <div class="d-flex flex-row justify-content-between pt-2">
            <p>Subtotal</p>
            <p>R$ ${totalAtual.toFixed(2)}</p>
        </div>
        <div class="d-flex flex-row justify-content-between p-2">
            <p>Frete</p>
            <p>R$ 10.00</p>
        </div>
        <div class="d-flex flex-row justify-content-between p-2">
            <p>Total</p>
            <p>R$ ${(totalFrete.toFixed(2))}</p>
        </div>
    `;
}

function praOndeIr(){
    const finalizarPedido = document.getElementById("finalizar-pedido");
    const botao = document.getElementById('pix');
    finalizarPedido.addEventListener('click', () => {
        const pixSelecionado = botao.checked;
        if (pixSelecionado){
            window.location.href = "qr.html";
        }
        else {
            window.location.href = "sucesso.html";
        }
    });
}

praOndeIr()

pagamento()