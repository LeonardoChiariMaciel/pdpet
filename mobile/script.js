function toggleArticle(articleID) {

    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.style.display = 'none';
    });

    const article = document.getElementById(articleID);    
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}
