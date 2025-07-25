function toggleArticle() {

    const article = document.getElementById('article-animal');
    
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}
