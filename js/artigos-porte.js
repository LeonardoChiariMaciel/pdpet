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


const botoes = document.querySelectorAll('.botao-animal');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.classList.contains('ativo')) { //clicando pela segunda vez seguida no msm botão
            botao.classList.remove('ativo');
        }
        else { //clicando em outro botão anteriormente fechado 
            botoes.forEach(bt => bt.classList.remove('ativo'));
            botao.classList.add('ativo');

        }
    });
}); 