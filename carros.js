let xCarros = [];
let yCarros = [46, 100, 210, 320, 265, 155];
let comprimentoDoCarro = 50;
let alturaDoCarro = 30;
let velocidadeMinima = 1.5;
let velocidadeMaxima = 5;
let velocidadesCarros = [];

function gerarCarros() {
  xCarros = [];
  velocidadesCarros = [];

  for (let i = 0; i < 6; i++) {
    let randomX = Math.random() * 400 + 200;
    xCarros.push(randomX);
    velocidadesCarros.push(getRandomVelocidade());
  }
}

gerarCarros(); // Chamar a função após definição

function mostrarCarros() {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    xCarros[i] -= velocidadesCarros[i];

    if (xCarros[i] < -comprimentoDoCarro) {
      xCarros[i] = width;
      velocidadesCarros[i] = getRandomVelocidade();
    }
  }
}

function getRandomVelocidade() {
  let random = Math.random();
  return velocidadeMinima + random * (velocidadeMaxima - velocidadeMinima);
}