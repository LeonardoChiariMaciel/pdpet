function atualizarPix() {
    const valorTexto = document.getElementById('valor-total');
    const totalAtual = parseFloat(localStorage.getItem('atual_total'));
    valorTexto.innerHTML = ''
    valorTexto.innerHTML += `
        <h4 class="f14 bold text-center" id="valor-total">
            Valor da compra: R$ ${totalAtual.toFixed(2)}
        </h4>
    `;
}

atualizarPix();