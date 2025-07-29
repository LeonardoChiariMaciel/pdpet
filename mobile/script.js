function toggleArticle(articleID) {

    const article = document.getElementById(articleID);
    
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}
