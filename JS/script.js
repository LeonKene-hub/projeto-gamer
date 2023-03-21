function MostrarMenu() {
    document.getElementById("menu-mobile1").classList.toggle("MostrarMenu");
}

function MostrarMenu2() {
    document.getElementById("menu-mobile2").classList.toggle("MostrarMenu2");
}

function Logar() {
    let email = document.getElementById("email-login")
    let senha = document.getElementById("senha-login")
    
    if (email.value.length == 0, senha.value.length ==0){
        window.alert("Por favor, digite seu email e senha")
    } else {
        window.location.href = "../jogadores.html"
    }
}
