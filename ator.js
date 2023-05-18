// Definição das variáveis
let xMeuAtor = 200; // Posição inicial do ator no eixo X
let yMeuAtor = 366; // Posição inicial do ator no eixo Y
let tamanhoDoAtor = 40; // Tamanho do ator (largura e altura)
let colisao = false; // Variável para verificar colisão
let meusPontos = 0; // Pontuação do jogador

// Função para exibir o ator na tela
function mostraAtor() {
  image(imagemDoAtor, xMeuAtor, yMeuAtor, tamanhoDoAtor, tamanhoDoAtor);
}

// Função para movimentar o ator
function movimentaAtor() {
  if (keyIsDown(87)) { // Tecla 'W' pressionada
    yMeuAtor -= 2; // Ajusta o Movimento o ator para cima
  }
  if (keyIsDown(83)) { // Tecla 'S' pressionada
  if (podeSeMoverparaBaixo()){
    yMeuAtor += 2; // Ajusta o Movimento o ator para baixo
    }
  }
}

// Função para verificar colisões com os carros
function verificaColisao() {
  for (let i = 0; i < xCarros.length; i++) {
    colisao = collideRectRect(
      xCarros[i],
      yCarros[i],
      comprimentoDoCarro,
      alturaDoCarro,
      xMeuAtor,
      yMeuAtor,
      tamanhoDoAtor,
      tamanhoDoAtor
    );

    if (colisao) {
      voltaAtorParaPosicaoInicial(); // Volta o ator para a posição inicial
      if (meusPontos > 0) {
        meusPontos -= 1; // Decrementa a pontuação em caso de colisão
      }
      break;
    }
  }
}

// Função para voltar o ator para a posição inicial
function voltaAtorParaPosicaoInicial() {
  yMeuAtor = 366; // Define a posição Y inicial do ator
}

function podeSeMoverparaBaixo(){
  return yMeuAtor < 366;
}