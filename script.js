var nome, nascimento, cidade, estado, anoAtual, idade;

function iniciarEntrevista() {
  nome = prompt("Qual é o seu nome?");
  nascimento = prompt("Qual é o seu ano de nascimento?");
  cidade = prompt("Em qual cidade você nasceu?");
  estado = prompt("Em qual estado você nasceu?");
  anoAtual = new Date().getFullYear();
  idade = anoAtual - nascimento;

  if (idade >= 18) {
    alert("Seja bem-vindo(a), " + nome + "! Você é maior de idade.");
  } else {
    alert("Seja bem-vindo(a), " + nome + "! Você é menor de idade.");
  }

  document.getElementById("verDadosButton").style.display = "block";
}

function exibirDados() {
    var dadosContainer = document.getElementById("dadosContainer");
    var dados = "<p class='dados-texto'>Seu nome é " + nome + ".</p>";
    dados += "<p class='dados-texto'>Você nasceu no ano de " + nascimento + " e tem " + idade + " anos.</p>";
    dados += "<p class='dados-texto'>Você é da cidade de " + cidade + " no estado " + estado + ".</p>";
    dados += "<p class='dados-texto'>Você é " + (idade >= 18 ? "maior" : "menor") + " de idade.</p>";
    dados += "<p class='dados-texto'>Obrigado por participar!</p>";
    dadosContainer.innerHTML = dados;
    document.getElementById("verDadosButton").style.display = "none";
}