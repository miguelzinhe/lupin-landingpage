// SLIDER
function criarUmBullet(numeroDoSlide){
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className="bullet";
	// PARAM1 = Nome da propriedade
	// PARAM2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);

	// Inserindo o button no li
	li.appendChild(button);
	// Inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
	// pegando todos os slides que estão dentro da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	// Criar os bullets
	for(var i=0; i < quantidadeSlides; i++){
		// Criar um bullet
		criarUmBullet(i);
	}

}

var slideIndexAtivo = 0;
// Funções para os botoes
// Botao da seta esquerda
function voltarSlide(){

	if(slideIndexAtivo > 0){
		// var proximoSlideIndex = slideIndexAtivo + 1;
		// irParaOSlide(proximoSlideIndex);

		// Qual slide que é o seguinte?
		var anteriorSlideIndex = slideIndexAtivo - 1;
		var anteriorSlideOrdem = anteriorSlideIndex + 1;

		// Desaparecer com o slide que estava ativo
		var slideAtual = document.querySelector("#slider .slide.ativo");
		slideAtual.classList.remove("ativo");

		// Mostrar o slide
		var proximoSlide = document.querySelector("#slider .slide:nth-child("+anteriorSlideOrdem+")");
		proximoSlide.classList.add("ativo");

		// Atualizar o slideIndexAtivo
		slideIndexAtivo = anteriorSlideIndex;
	}
}

// Botao da seta direita
function avancarSlide(){
	var slides = document.querySelectorAll("#slider .slide");

	if(slideIndexAtivo < slides.length-1){
		// Qual slide que é o seguinte?
		var proximoSlideIndex = slideIndexAtivo + 1;
		var proximoSlideOrdem = proximoSlideIndex + 1;

		// Desaparecer com o slide que estava ativo
		var slideAtual = document.querySelector("#slider .slide.ativo");
		slideAtual.classList.remove("ativo");

		// Mostrar o slide
		var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");
		proximoSlide.classList.add("ativo");

		// Atualizar o slideIndexAtivo
		slideIndexAtivo = proximoSlideIndex;
	}
}

function irParaOSlideCorrespondente(){
	// Pegar o slide com a classe ativo
	var slideAtivo = document.querySelector(".slide.ativo");
	// Desaparece o slide ativo
	slideAtivo.classList.remove("ativo");
	// Aparecer o slide Correspondente
	// Transformar o texto em numero
	var slideIndex = parseInt( this.getAttribute("data-slide") );
	var numeroSlide = slideIndex+1;

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");
	slideCorrespondente.classList.add("ativo");
	// Atualizar o slideIndexAtual
	slideIndexAtivo = slideIndex;

}


function adicionarOnClickNosBotoes(){
	// Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	// Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet");
	for(var i=0;i<bullets.length;i++){
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
}

// Se o slide existe
// Se o slider é diferente de null ele existe!
var slider = document.querySelector("#slider");
if(slider != null){
	//CRIAR OS BULLETS de acordo com a quantidade de slides
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
}

// FIM DO SLIDER


// MENU SOME AO SCROLLAR
$(document).scroll(function () {
    var y = $(this).scrollTop();
	console.log(y);
    if (y > 800) {
        $('#topo-fixo').fadeOut();
    } else {
        $('#topo-fixo').fadeIn();
    }

});
// FIM MENU SOME AO SCROLLAR

// TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

// FIM DO TOP

// MENU HAMBURGUER
var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menuHorizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;

// FIM MENU