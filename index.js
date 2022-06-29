function carregar() {
    let msg = document.querySelector("#msg");
    let img = document.querySelector("#imagem");
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`;
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "../img/arquivo_manha.png";
        document.body.style.background = "#b9a398";
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "../img/arquivo_tarde.png";
        document.body.style.background = "#d7c05a";
    } else {
        //boa noite
        img.src = "../img/arquivo_noite.png";
        document.body.style.background = "#4c2460";
    }
}