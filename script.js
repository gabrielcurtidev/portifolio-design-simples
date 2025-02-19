const menuBurguer = document.querySelector('.menu-burguer')
const menuMobile = document.querySelector('.menu-mobile')
const mobileTxt = document.querySelectorAll(".mobile-txt")

function menuCliquei(){
    menuMobile.classList.toggle('open')
    document.body.style.overflow = "hidden";
    
}

function remove(){
    menuMobile.classList.remove('open')
    document.body.style.overflow = "";
}