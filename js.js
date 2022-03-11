const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#situacao');  
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar')

elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = '../assets/img/naruto1.jpg'
        elementoNome.innerText = 'Naruto Uzumaki '
        elementoSituacao.innerText = 'Normal'
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo') { 

        elementoImg.src = '../assets/img/naruto2.png' 
        elementoNome.innerText = 'Naruto uma cauda'
        elementoSituacao.innerText = 'Descontrolado' 
        elementoBtn.value = 'terceiro'  
    } else { 
        elementoImg.src = '../assets/img/naruto3.jpg' 
        elementoNome.innerText = 'Naruto Capiroto' 
        elementoSituacao.innerText = 'Chama o Yamato'
        elementoBtn.value = 'primeiro'
    }
})