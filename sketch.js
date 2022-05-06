// variáveis da bolinha
let xBolinha = 320;
let yBolinha = 200;
let diametro = 25;
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

// variáveis do oponente
let xSegundaRaquete = 625;
let ySegundaRaquete = 150;
let movimentoYSegundaRaquete;

// placar do jogo
let meusPontos = 0;
let pontosSegundoJogador = 0;

function setup() {
  createCanvas(640, 400);
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
  
  //xBolinha += velocidadeXBolinha;
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
  }
}

function movimentaSegundaRaquete() {
  
  movimentoYSegundaRaquete = yBolinha - ySegundaRaquete -           alturaDaRaquete / 2 -30;
    
  ySegundaRaquete += movimentoYSegundaRaquete;
  
  let teste; 
  teste = ySegundaRaquete;
  console.log(teste);
}

function mostraPlacar() {
  
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosSegundoJogador, 321, 26);
}

function marcaPontos() {
  
  if(xBolinha > 630) {
    
    meusPontos += 1;
  }
  
  if(xBolinha < 10) {
    
    pontosSegundoJogador += 1;
  }
}

// Carlos Henrique 07/02/2022
