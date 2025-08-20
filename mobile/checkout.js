function pagamento () {
    const blocoValor = document.getElementById('total');
    const totalAtual = parseFloat(localStorage.getItem('atual_total'));
    const totalFrete = 10 + totalAtual;
    blocoValor.innerHTML = '';
    blocoValor.innerHTML += `
        <div class="d-flex flex-row justify-content-between pt-2 pb-2 ps-2 pe-2">
            <p>Subtotal</p>
            <p>R$ ${totalAtual.toFixed(2)}</p>
        </div>
        <div class="d-flex flex-row justify-content-between pt-2 pb-2 ps-2 pe-2">
            <p>Frete</p>
            <p>R$ 10.00</p>
        </div>
        <div class="d-flex flex-row justify-content-between pt-2 pb-2 ps-2 pe-2">
            <p>Total</p>
            <p>R$ ${(totalFrete.toFixed(2))}</p>
        </div>
    `;
}

pagamento()