numAleatorio = Math.floor (Math.random() * 11 );
parseInt;pontos = 100;
function numeroDigitado () {
		campoNumero = parseInt(document.getElementById("campoNumero") .value);
		while(campoNumero!=numAleatorio ) { 
			pontos -= 1 ;
			break;
			
		}
		if (campoNumero==numAleatorio){
			alert("O numero digitado esta correto voce ganhou" +pontos+ " pontos !!")
		}
		else if (campoNumero>numAleatorio){
			alert("O numero digitado é maior que o numero pensado ")
		}
		else if(campoNumero<numAleatorio){
			alert("O numero digitado é menor que o numero pensado")
		}
}
		function novojogo() {
		numeroAleatorio = Math.floor(Math.random() * 11);
		pontos = 100;
		document.getElementById("numeroDigitado").innerHTML = "";
		document.getElementById("numAleatorio").disabled = false;
		document.getElementById("numAleatorio").value = "";
}
