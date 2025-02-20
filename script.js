const menuBurguer = document.querySelector('.menu-burguer')
const menuMobile = document.querySelector('.menu-mobile')
const mobileTxt = document.querySelectorAll(".mobile-txt")
const btnEmail = document.querySelector('.btn-email')

function menuCliquei(){
    menuMobile.classList.toggle('open')
    
    if(menuMobile.classList.contains('open')){
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
    
}

function remove(){
    menuMobile.classList.remove('open')
    document.body.style.overflow = "";
}

btnEmail.addEventListener('click', (copiarTexto) =>{
    let email = 'gabrielcurti.dev@outlook.com' 

    navigator.clipboard.writeText(email)
    .then(() => {
        let mensagem = document.getElementById("mensagem");
        mensagem.style.display = "block";
        setTimeout(() => mensagem.style.display = "none", 1500);
    })
    .catch(err => {
        console.error("Erro ao copiar: ", err);
    });

    
})