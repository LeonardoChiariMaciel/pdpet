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