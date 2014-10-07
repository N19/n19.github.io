$(document).ready(function () {

	/* Essa função gera uma cor aleatória */

	function getRandomColor() {
		var numbers = new Array();
		for (var i = 0; i < 3; i++) {
			numbers.push(Math.floor(Math.random() * 256));
		}
		var color = 'rgb(' + numbers + ')';
		return color;
	}

	/* Função que aplica o efeito de transição de cor */

	function changeColor() {
		$('body').animate({
			backgroundColor: getRandomColor()
		}, 10000);
	}

	/* E aqui chamamos ela em um certo intervalo de tempo */

	setInterval(function(){changeColor()}, 1000);

	/* Pequeno efeito que faz com que o coração pareça estar batendo */

	function heartbeat() {
		function grow() {
			$('.left').animate({
				width: "280px",
				height: "400px"
			}, 600);
			$('.right').animate({
				width: "280px",
				height: "400px"
			}, 600);
			$('.heart').animate({
				top: "80px",
				left: "55%"
			}, 600);
		}
		function normal() {
			$('.left').animate({
				width: "230px",
				height: "350px"
			}, 600);
			$('.right').animate({
				width: "230px",
				height: "350px"
			}, 600);
			$('.heart').animate({
				top: "100px",
				left: "57%"
			}, 600);
		}
		setInterval(function(){grow()}, 600);
		setInterval(function(){normal()}, 600);
	}

	heartbeat();

	/* Isso faz o rodapé aparecer com um efeito legal :D */

	$('.msg p').hide();
	setInterval(function() {$('.msg p').show('clip', 'slow')}, 1000);
});
