const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");


elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "./assets/img/naruto1.png";
    elementoNome.innerText = "Naruto Uzumaki ";
    elementoSituacao.innerText = "Normal";
    document.body.style.background = "url('./assets/img/bg.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src = "./assets/img/naruto2.png";
    elementoNome.innerText = "Naruto 1 cauda";
    elementoSituacao.innerText = "Descontrolado";
    document.body.style.background = "url('./assets/img/bg2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    elementoBtn.value = "terceiro";
  } else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "./assets/img/naruto3.png";
    elementoNome.innerText = "Naruto 4 caudas";
    elementoSituacao.innerText = "Chama o Yamato";
    document.body.style.background = "url('./assets/img/bg3.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    elementoBtn.value = "quarto";
  } else {
    elementoImg.src = "./assets/img/naruto4.png";
    elementoNome.innerText = "Naruto 6 caudas";
    elementoSituacao.innerText = "É o fim do Pain";
    document.body.style.background = "url('./assets/img/bg4.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    elementoBtn.value = "primeiro";
  }
});
