const excluirLinha = document.querySelector("#tabela-registros");
excluirLinha.addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("btn-excluir")) {
    
    const linha = event.target.closest("tr");
    const confirmacao = confirm("Deseja realmente excluir o registro?");
 
    setTimeout(function() {
      if (confirmacao) {
        linha.remove();
      }
    }, 500);
  }
});
