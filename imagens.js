//Imagens e Sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;
let imagemDosCarros = [];

function preload() {
  imagemDoAtor = loadImage("imagens/ator.png");
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoCarro1 = loadImage("imagens/Car1.png");
  imagemDoCarro2 = loadImage("imagens/Car2.png");
  imagemDoCarro3 = loadImage("imagens/Car3.png");
  imagemDoCarro4 = loadImage("imagens/Car4.png");
  imagemDoCarro5 = loadImage("imagens/Car5.png");
  imagemDoCarro6 = loadImage("imagens/Car6.png");
  imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro4, imagemDoCarro5, imagemDoCarro6];
  
  somDaTrilha = loadSound ("som/trilha.mp3")
  somDaColisao = loadSound ("som/colidiu.mp3")
  somDoPonto = loadSound ("som/pontos.wav")
}
