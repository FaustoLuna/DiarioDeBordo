var campoFiltroR = document.querySelector("#filtrar-tabela");

campoFiltroR.addEventListener("input", function(){
	console.log(this.value);
	var registros = document.querySelectorAll(".registro");
	
	if( this.value.length > 0){
		for( var i = 0; i < registros.length ; i++){
			var registro = registros[i];
			var tdNome = registro.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value,"i");

			if(!expressao.test(nome)){
				registro.classList.add("invisivel");
			}else{
				registro.classList.remove("invisivel");
			}
		}
	}else{
		for (var i = 0; i < registros.length; i++) {
			var registro = registros[i];
			registro.classList.remove("invisivel");
		}
	}

});