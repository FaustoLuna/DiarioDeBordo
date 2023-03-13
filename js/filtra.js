var campoFiltroR = document.querySelector("#filtrar-registro");

campoFiltroR.addEventListener("input", function(){
	
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


var campoFiltroS = document.querySelector("#filtrar-status");

campoFiltroS.addEventListener("input", function(){
	
	var registros = document.querySelectorAll(".registro");
	
	if( this.value.length > 0){
		for( var i = 0; i < registros.length ; i++){
			var registro = registros[i];
			var tdStatus = registro.querySelector(".info-status");
			var status = tdStatus.textContent;
			var expressao = new RegExp(this.value,"i");
				if(expressao.test("Todos")){
					registro.classList.remove("invisivel");
				}else{
					if(!expressao.test(status)){
						registro.classList.add("invisivel");
					}else{
						registro.classList.remove("invisivel");
					}
				}
		}
	}else{
		for (var i = 0; i < registros.length; i++) {
			var registro = registros[i];
			registro.classList.remove("invisivel");
		}
	}
});