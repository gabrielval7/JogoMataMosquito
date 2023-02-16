var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var cronometro = setInterval(function (){

/*var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace("?", "")
	
if(nivel == 'normal'){
	//1500 milisegundos
	criaMosquitoTempo = 1500
}else if(nivel == 'dificil'){
	//1000 milisegundos
	criaMosquitoTempo = 1000
}else if(nivel == 'chucknorris'){
	//750 milisegundos
	criaMosquitoTempo = 650
}
*/	
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}

	tempo --
	}, 1000)

function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}
ajustaTamanhoJogo()


function posicaoRandomica(){

	//Remover mosquito anterior caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
	

		if(vidas > 3){
			window.location.href = 'gameover.html'
		}else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas ++
		}

	}
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoY = posicaoY < 0 ? 0 : posicaoY
	posicaoX = posicaoX < 0 ? 0 : posicaoX

	console.log(posicaoY, posicaoX)

	//Criando o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	document.body.appendChild(mosquito)
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	console.log(tamanhoAleatorio())
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'		
	}

}
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'		
	}

}