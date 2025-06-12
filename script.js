document.getElementById("formContato").addEventListener("submit", function(e) {
  const nome = document.getElementById("nome").value;
  if (/[^a-zA-Z\s]/.test(nome)) {
    alert("Nome não pode conter números ou caracteres especiais.");
    e.preventDefault();
  }
});

document.getElementById("verResultado").addEventListener("click", function () {
  document.getElementById("relatorio").classList.remove("hidden");
});
