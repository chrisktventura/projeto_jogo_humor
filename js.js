const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
// const elementoBg = document.body.style.backgroundImage;
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "./assets/img/naruto1.jpg";
    elementoNome.innerText = "Naruto Uzumaki ";
    elementoSituacao.innerText = "Normal";
    document.body.style.backgroundImage = "url('./assets/img/bg.jpg')";
    
    
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src = "./assets/img/naruto2.png";
    elementoNome.innerText = "Naruto 1 cauda";
    elementoSituacao.innerText = "Descontrolado";
    document.body.style.backgroundImage = "url('./assets/img/bg2.jpg')";
    document
    
    elementoBtn.value = "terceiro";
  } else {
    elementoImg.src = "./assets/img/naruto3.jpg";
    elementoNome.innerText = "Naruto 4 caudas";
    elementoSituacao.innerText = "Chama o Yamato";
    document.body.style.backgroundImage = "url('./assets/img/bg3.jpg')";
    elementoBtn.value = "primeiro";
  }
});

function AsyncTrocaImg() {
  $.post(base + "Home/GetNewImg", {}, function (URL) {
       $('body').css('background-image', 'url('+URL+')');
  }).fail(function () {
      console.log("error");
  })
}