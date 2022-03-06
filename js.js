const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const elementoSituacao = document.querySelector('#situacao'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela */
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoBtn = document.querySelector('#alterar') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o naruto */
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/naruto1.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Uzumaki Naruto' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Normal' /* Altera o texto do elemento situação */
        elementoBtn.value = 'segundo' /* Altera valor do botão */
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para descontrolado */
        elementoImg.src = './assets/img/naruto2.png'  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Naruto 1 Cauda' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Descontrolado' /* Altera o texto do elemento situação */
        elementoBtn.value = 'terceiro'  /* Altera valor do botão */
    } else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o Naruto Capiroto */
        elementoImg.src = './assets/img/naruto3.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Naruto Capiroto' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'HARDCORE Ninguém segura' /* Altera o texto do elemento situação */
        elementoBtn.value = 'primeiro' /* Altera valor do botão */
    }
})