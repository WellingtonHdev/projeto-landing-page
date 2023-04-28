const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.list-itens');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
} )