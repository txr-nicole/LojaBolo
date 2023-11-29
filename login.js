function fazerLogin(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let banco = localStorage.getItem("Banco");
    let sinaliza = false
    banco = JSON.parse(banco);
    
    for (let i = 0; i < banco.length; i++) {
        if (banco[i].dadosLogin.email == email && banco[i].dadosLogin.senha == senha) {
            sessionStorage.setItem("LoginAtual", JSON.stringify(banco[i]));
            sinaliza = true
        } 
    } 
    
    if (sinaliza){
        alert("Bem-vindo")
        window.location.href = "./index.html" 
    }
    else{
        alert("Não encontrado verifique seus dados")
    }
}

function verificaLogin() {
    let login = JSON.parse(sessionStorage.getItem("LoginAtual"));
    let bemvindo = document.getElementById("bemvindo");
    if (login != null){
        bemvindo.innerHTML = `Bem vindo, ${login.dadosBasicos.nome}`;
    }
}
verificaLogin();