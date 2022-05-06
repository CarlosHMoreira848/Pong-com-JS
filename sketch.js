// Instruções:
// Aperte play para jogar!
// Clique dentro da mesa para movimentar!
// Use as teclas para cima e para baixo para mover a sua raquete!

// variáveis da bolinha
let xBolinha = 320;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// variáveis do movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis da requete
let xRaquete = 5;
let yRaquete = 150;
let larguraDaRaquete = 10;
let alturaDaRaquete = 90;

let colisao = false;

// variáveis da segunda raquete
let xSegundaRaquete = 625;
let ySegundaRaquete = 150;
let movimentoYSegundaRaquete;

let chanceDeErro = 0;

// placar do jogo
let meusPontos = 0;
let pontosSegundoJogador = 0;

// sons do jogo
  let raquetada;
  let ponto;
  let trilha;

function preload() {

  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(640, 400);
  
  trilha.loop();
}  
  

function draw() {
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoComABorda();
  
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
  //verificaColisaoRaquete();
  
  mostraRaquete(xSegundaRaquete, ySegundaRaquete);  
  movimentaSegundaRaquete();
  verificaColisaoRaqueteBiblioteca(xSegundaRaquete,                 ySegundaRaquete);
  
  mostraPlacar();
  marcaPontos();
}

function mostraBolinha() {
  
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha() {
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoComABorda() {
  
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0) {
    
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  
    rect(x, y, larguraDaRaquete, alturaDaRaquete);
}

function movimentaMinhaRaquete() {
  
  if(keyIsDown(UP_ARROW)) {
    
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  
  if(xBolinha - raio < xRaquete + larguraDaRaquete && yBolinha - raio < yRaquete + alturaDaRaquete && yBolinha + raio > yRaquete) {
    
    velocidadeXBolinha *= -1;
  }
}


function verificaColisaoRaqueteBiblioteca(x, y) {
  
  colisao = collideRectCircle(x, y, larguraDaRaquete,               alturaDaRaquete, xBolinha, yBolinha, raio);
  
  if(colisao) {
    
    velocidadeXBolinha *= -1;
    raquetada.play();
    
    chanceDeErro = parseInt((Math.random() * (100) - 10).toFixed(0));
  }
}

function movimentaSegundaRaquete() {
  
  movimentoYSegundaRaquete = yBolinha - ySegundaRaquete -           alturaDaRaquete / 2 -10;
    
  ySegundaRaquete += movimentoYSegundaRaquete + chanceDeErro;

}

function mostraPlacar() {
  
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill((color(255, 140, 0)));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill((color(255, 140, 0)));
  rect(490, 10, 40, 20);
  fill(255);
  text(pontosSegundoJogador, 510, 26);
}

function marcaPontos() {
  
  if(xBolinha > 630) {
    
    meusPontos += 1;
    ponto.play();
  }
  
  if(xBolinha < 10) {
    
    pontosSegundoJogador += 1;
    ponto.play();
  }
}


// Carlos Henrique 09/02/2022
