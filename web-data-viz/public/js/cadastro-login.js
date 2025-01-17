var msgErro = document.getElementById("msgError");
var divErro = document.getElementById("divError");

function exibirMsg() {
    caixas_erro.style.display = "flex";
    setTimeout(function () {
        divErro.style.display = "none";
    }, 1500);
}

function cadastrar() {
    var usuarioVar = document.getElementById("input_usuario").value;
    var emailVar = document.getElementById("input_email").value;
    var tokenVar = document.getElementById("input_token").value;
    var senhaVar = document.getElementById("input_senha").value;
    var cnpjVar = document.getElementById("input_cnpj").value;
    var confirmacaoSenhaVar = document.getElementById("input_confirmaSenha").value;

    var cadastroValido = true;

    if (usuarioVar == "") {
        input_usuario.style.borderColor = "red";
        erro_usuario.style = "font-weight: 700; color: red"
        erro_usuario.innerHTML = "Usuário deve ser prenchido";
        cadastroValido = false;
    } else {
        erro_usuario.style = "font-weight: 700; color: white"
        input_usuario.style.borderColor = "white";
        erro_usuario.innerHTML = "Usuário";
    }
    
    if (emailVar == "") {
        input_email.style.borderColor = "red";
        erro_email.style = "font-weight: 700; color: red"
        erro_email.innerHTML = "E-mail deve ser prenchido";
        cadastroValido = false;
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
        input_email.style.borderColor = "red";
        erro_email.style = "font-weight: 700; color: red"
        erro_email.innerHTML = "E-mail inválido";
        cadastroValido = false;
    } else {
        erro_email.style = "font-weight: 700; color: white"
        input_email.style.borderColor = "white";
        erro_email.innerHTML = "E-mail";
    }
    
    if (tokenVar == "") {
        input_token.style.borderColor = "red";
        erro_token.style = "font-weight: 700; color: red"
        erro_token.innerHTML = "Token deve ser prenchido";
        cadastroValido = false;
    } else if (tokenVar.indexOf("@") != -1 || tokenVar.indexOf(".") != -1 || tokenVar.indexOf("-") != -1 || tokenVar.indexOf(" ") != -1) {
        input_token.style.borderColor = "red";
        erro_token.style = "font-weight: 700; color: red"
        erro_token.innerHTML = "Token inválido";
        cadastroValido = false;
    } else {
        erro_token.style = "font-weight: 700; color: white"
        input_token.style.borderColor = "white";
        erro_token.innerHTML = "Token";
    }
    
    if (cnpjVar == "") {
        input_cnpj.style.borderColor = "red";
        erro_cnpj.style = "font-weight: 700; color: red"
        erro_cnpj.innerHTML = "CNPJ deve ser prenchido";
        cadastroValido = false;
    } else if (cnpjVar.length < 14) {
        input_cnpj.style.borderColor = "red";
        erro_cnpj.style = "font-weight: 700; color: red"
        erro_cnpj.innerHTML = "CNPJ inválido";
        cadastroValido = false;
    } else {
        erro_cnpj.style = "font-weight: 700; color: white"
        input_cnpj.style.borderColor = "white";
        erro_cnpj.innerHTML = "CNPJ";
    }
    
    if (senhaVar == "") {
        input_senha.style.borderColor = "red";
        erro_senha.style = "font-weight: 700; color: red"
        erro_senha.innerHTML = "Senha deve ser prenchida";
        cadastroValido = false;
    } else if (senhaVar.length < 7) {
        input_senha.style.borderColor = "red";
        erro_senha.style = "font-weight: 700; color: red"
        erro_senha.innerHTML = "Senha muito pequena";
        cadastroValido = false;
    } else {
        erro_senha.style = "font-weight: 700; color: white"
        input_senha.style.borderColor = "white";
        erro_senha.innerHTML = "Senha";
    }
    
    if (confirmacaoSenhaVar == "") {
        input_confirmaSenha.style.borderColor = "red";
        erro_repetir_senha.style = "font-weight: 700; color: red"
        erro_repetir_senha.innerHTML = "Repetir senha deve ser prenchida";
        cadastroValido = false;
    } else if (confirmacaoSenhaVar != senhaVar) {
        input_confirmaSenha.style.borderColor = "red";
        erro_repetir_senha.style = "font-weight: 700; color: red"
        erro_repetir_senha.innerHTML = "As senhas devem ser identicas";
        cadastroValido = false;
    } else {
        erro_repetir_senha.style = "font-weight: 700; color: white"
        input_confirmaSenha.style.borderColor = "white";
        erro_repetir_senha.innerHTML = "Repetir Senha";
    }
    
    if (cadastroValido) {
        console.log("Cadastro concluído")
    }
}

function entrar() {
    var usuarioVar = document.getElementById("input_usuario").value;
    var senhaVar = document.getElementById("input_senha").value;
    var loginValido = true;

    if (usuarioVar == "") {
        input_usuario.style.borderColor = "red";
        erro_usuario.style = "font-weight: 700; color: red"
        erro_usuario.innerHTML = "Usuário deve ser prenchido";
        loginValido = false;
    }
    
    if (senhaVar == "") {
        input_senha.style.borderColor = "red";
        erro_senha.style = "font-weight: 700; color: red"
        erro_senha.innerHTML = "Senha deve ser prenchido";
        loginValido = false;
    }
    
    if (senhaVar != "" && usuarioVar != ""){
        input_senha.style.borderColor = "red";
        erro_senha.style = "font-weight: 700; color: red"
        erro_senha.innerHTML = "Senha inválida";
        
        input_usuario.style.borderColor = "red";
        erro_usuario.style = "font-weight: 700; color: red"
        erro_usuario.innerHTML = "Usuário inválido";
        loginValido = false;
    }
    
    if (loginValido) {
        console.log("Login concluído")
    }
}


function mudarOlho(olho, local) {
    if (local == "cadastro") {
        if (olho.id == "olho_senha") {
            if (olho.src[olho.src.length - 6] == "d") {
                olho_senha.src = "assets/icone-senha-aberto.jpg"
                input_senha.type = "text"
            } else {
                olho_senha.src = "assets/icone-senha-fechado.jpg"
                input_senha.type = "password"
            }
        } else {
            if (olho.src[olho.src.length - 6] == "d") {
                olho_repetir_senha.src = "assets/icone-senha-aberto.jpg"
                input_confirmaSenha.type = "text"
            } else {
                olho_repetir_senha.src = "assets/icone-senha-fechado.jpg"
                input_confirmaSenha.type = "password"
            }
        }
    } else {
        if (olho.id == "olho_senha") {
            if (olho.src[olho.src.length - 6] == "d") {
                olho_senha.src = "assets/icone-senha-aberto.jpg"
                input_senha.type = "text"
            } else {
                olho_senha.src = "assets/icone-senha-fechado.jpg"
                input_senha.type = "password"
            }
        }
    }
}