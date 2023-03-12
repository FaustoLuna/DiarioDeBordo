var botaoAdicionar = document.querySelector("#adicionar-registro");
		botaoAdicionar.addEventListener("click", function(){    
			event.preventDefault();                             

			var form = document.querySelector("#form-adiciona") 
			var regristro = obtemRegistroDoFormulario(form);


			adicionaRegistroNaTabela(regristro);
			
			form.reset();
			var mensagensErro = document.querySelector("#mensagens-erro");
			mensagensErro.innerHTML = "Registro Adicionado com sucesso";
});

		function adicionaRegistroNaTabela(regristro){
			var registroTr = montaTr(regristro);
			var tabela = document.querySelector("#tabela-registros");		
			var registroStatus = registroTr.querySelector(".info-status")
			
			tabela.appendChild(registroTr);

			if (registroStatus.textContent == "Concluido") {
				registroStatus.setAttribute('class','colorG')
			}
			if (registroStatus.textContent == "Pendente") {
				registroStatus.setAttribute('class','colorR')
			}			
			if (registroStatus.textContent == "Aguardando Coordenador") {
				registroStatus.setAttribute('class','colorB')
			}			
			if (registroStatus.textContent == "Aguardadno Desenvolvimento" || registroStatus.textContent == "Aguardadno GP") {
				registroStatus.setAttribute('class','colorO')
			}

		}

		function exibeMensagensDeErro(erros){
			var ul = document.querySelector("#mensagens-erro");
			ul.innerHTML = "";
			erros.forEach(function(erro){
				var li = document.createElement("li");
				li.textContent = erro;
				ul.appendChild(li);
			});
		}

		function obtemRegistroDoFormulario(form){				
			var regristro = {
				nome: form.nome.value,
				assunto: form.assunto.value,
				comentario: form.comentario.value,
				status: form.status.value,					
			}			
			
			return regristro;
		}
			

		function montaTr(registro){
			var registroTr = document.createElement("tr"); 
			registroTr.classList.add("registro");
	
			registroTr.appendChild(montaTd(registro.nome, "info-nome"));                     
			registroTr.appendChild(montaTd(registro.assunto, "info-assunto"));
			registroTr.appendChild(montaTd(registro.comentario, "info-comentario"));
			registroTr.appendChild(montaTd(registro.status, "info-status"));
			registroTr.appendChild(montaTd(dataHora, "info-data"));
			registroTr.appendChild(montaTd(iconeX, "info-action"));
			
			var data = new Date()
			const dia = String(data.getDate()).padStart(2, '0')
			const mes = String(data.getMonth()+1).padStart(2, '0')
			const ano = data.getFullYear()
			const dataAtual = `${dia}/${mes}/${ano}`
	
			const horas = String(data.getHours()).padStart(2, '0')
			const minutos = String(data.getMinutes()).padStart(2, '0')
			const segundos = String(data.getSeconds()).padStart(2, '0')
			const horaAtual = `${horas}:${minutos}:${segundos}`
	
			dataHora = `${dataAtual} - ${horaAtual}`

			iconeX = "X"
			
			return registroTr;	
		}

		function montaTd(dado,classe){
			var td = document.createElement("td");
			td.textContent = dado;
			td.classList.add(classe);
			return td;
		}

			var data = new Date()
			const dia = String(data.getDate()).padStart(2, '0')
			const mes = String(data.getMonth()+1).padStart(2, '0')
			const ano = data.getFullYear()
			const dataAtual = `${dia}/${mes}/${ano}`
	
			const horas = String(data.getHours()).padStart(2, '0')
			const minutos = String(data.getMinutes()).padStart(2, '0')
			const segundos = String(data.getSeconds()).padStart(2, '0')
			const horaAtual = `${horas}:${minutos}:${segundos}`
	
			dataHora = `${dataAtual} - ${horaAtual}`
	
			
			var icone = new Date()
			iconeX = "X"

    	
			

	

		

		
		
		
	