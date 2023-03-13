var registros = document.querySelectorAll(".registro");
var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event) {
  if (event.target.classList.contains("urgente")) {   
        event.target.classList.remove("urgente");
    }else{
        event.target.classList.add("urgente");
    }
});