//função de redirecionamento atualmente inativa sem link com a home.html
function redirecionamento() {
    const isMobile = window.innerWidth <= 768;
    const path = window.location.pathname;

    const isOnMobile = path.includes("index"); //verifica se o arquivo do live server contém o nome de cada versão
    const isOnDesktop = path.includes("desk-login");
    //confere se há conflito(tamanho mobile no desk ou o contrario)
    if (isMobile && !isOnMobile) {
    window.location.replace("index.html");
    } else if (!isMobile && !isOnDesktop) {
    window.location.replace("desk-login.html");
    }
}

// executa ao abrir a pág
redirecionamento();

//utiliza o conceito de eventos em JS para conferir novamente a cada redimensionamento 
let resizeTimeout;
window.addEventListener("resize", () => { //evento resize já é nativo do JS
    clearTimeout(resizeTimeout); //descarta o temporizador
    resizeTimeout = setTimeout(redirecionamento, 200); //reagenda o proximo evento para daqui a 0.2s para evitar muitas repetições
});