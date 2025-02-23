const menuBurguer = document.querySelector('.menu-burguer')
const menuMobile = document.querySelector('.menu-mobile')
const mobileTxt = document.querySelectorAll(".mobile-txt")
const btnEmail = document.querySelector('.btn-email')
const navMenu = document.querySelectorAll('.nav-menu li')


//MENU MOBILE ADD E REMOVE

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

//====================================

//BAIXAR CURRICULO

const btnCurriculo = document.getElementById('download-cv')
.addEventListener('click', function(){
    let mensagem = document.getElementById('mensagem')
    mensagem.style.display = 'block'
    setTimeout(() => {
        mensagem.style.display = 'none'
    }, 2000)
})

//====================================

// COPIAR EMAIL E SOLTAR A MSG DE COPIADO

// btnEmail.addEventListener('click', (copiarTexto) =>{
//     let email = 'gabrielcurti.dev@outlook.com' 

//     navigator.clipboard.writeText(email)
//     .then(() => {
//         let mensagem = document.getElementById("mensagem");
//         mensagem.style.display = "block";
//         setTimeout(() => mensagem.style.display = "none", 1500);
//     })
//     .catch(err => {
//         console.error("Erro ao copiar: ", err);
//     });

    
// })

//====================================

//COLOCAR UMA MARCAÇÃO  FIXA DE BORDER BUTTON NO MENU E IR TRANSFERINDO AO TROCAR DE LINK

// navMenu[0].classList.add('active')

// navMenu.forEach(item => {
//     item.addEventListener('click', function() {
//         navMenu.forEach(li => li.classList.remove('active')); // Remove de todos
//         this.classList.add('active'); // Adiciona no clicado
//     });
// });
