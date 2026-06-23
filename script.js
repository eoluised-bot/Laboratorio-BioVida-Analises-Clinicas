function entrar(){

    const usuario =
    document.getElementById("usuario").value;

    const senha =
    document.getElementById("senha").value;

    if(usuario === "paciente" &&
       senha === "1234"){

        document.getElementById("login")
        .style.display = "none";

        document.getElementById("carregamento")
        .style.display = "block";

        const agora = new Date();

        document.getElementById("data").innerHTML =
        agora.toLocaleDateString("pt-BR") +
        " " +
        agora.toLocaleTimeString("pt-BR");

        setTimeout(() => {
            window.location.href = "laudo.pdf";
        }, 4000);

    }else{

        document.getElementById("erro").innerHTML =
        "Usuário ou senha incorretos.";

    }
}
