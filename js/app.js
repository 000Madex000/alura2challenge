const menu = document.getElementById('icon');
const close = document.querySelector('.close');
const menuBar = document.querySelector('.menu_contenedor');

menu.addEventListener('click',function(){
    menuBar.style.display='block'
})
close.addEventListener('click',function(){
    menuBar.style.display='none'
})
