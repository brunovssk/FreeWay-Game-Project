function setup(){
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostrarCarros();
  movimentaCarro();
  marcaPonto();
  verificaColisao();
  incluiPontos();
  
}

// Função para exibir a pontuação na tela
function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Pontos: ' + meusPontos, width / 2, 27);
}

// Função para marcar pontos quando o ator chegar ao topo da tela
function marcaPonto() {
  if (yMeuAtor < 15) {
    meusPontos++; // Incrementa a pontuação
    voltaAtorParaPosicaoInicial(); // Volta o ator para a posição inicial
  }
}