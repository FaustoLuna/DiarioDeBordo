var registros = document.querySelectorAll(".registro");
var tabela = document.querySelector("tbody");

 tabela.addEventListener("click", function(event){

	var senha = prompt("Digite a senha para realizar a exclusão do Registro")

	if (senha === "123456") {
		event.target.classList.add("fadeOut");

 		setTimeout(function(){
 		event.target.parentNode.remove();
 		},500);
	}else{
		alert("Senha incorreta")
	}
 });

