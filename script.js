const agora = new Date();

document.getElementById("data").innerHTML =
  agora.toLocaleDateString("pt-BR") +
  " " +
  agora.toLocaleTimeString("pt-BR");

setTimeout(() => {
  window.location.href = "laudo.pdf";
}, 4000);
