var billie;
var locX;
var locY;
var song;
var soundon=false;
var tipob;

/*Esto sirve para detectar cuanto ocupa la caja de texto
para poder centrarla*/

let message = '.BILLIE EILISH',
Pangolin,
bounds, // esto devuelve el tamaño de la caja de texto
fontsize = 60,
textx,
texty; // coordenadas del texto


function preload(){
  Pangolin= loadFont("Pangolin-Regular.ttf");
  song = loadSound("buryafriend.mp3");
  tipob=loadFont("GloriaHallelujah.ttf");
}

function setup() {
  billie = loadImage("billie.jpg");
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(Pangolin);
  textSize(fontsize);

 //Centrar la caja de texto en el centro
  bounds = Pangolin.textBounds(message, 0, 0, fontsize);
  textx = 0 - bounds.w / 2; //resta la mitad del width del texto al eje x
  texty = 0 - bounds.h / 2; //resta la mitad del height del texto al eje y
}

function draw() {
  textFont(Pangolin);
  sonido();
  luz();
  textSize(80);
  text(message, textx, texty);
  bounds = Pangolin.textBounds(message, textx, texty, fontsize);
  movertexto();

  textFont(tipob);
  textSize(40);
  text("'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", 0-500, windowHeight-windowHeight/1.5);
  textSize(20);
  text("OUT MARCH 29 2019", 0-100, windowHeight-windowHeight/1.5+40);
}

/*Para no llamar a la funcion en bucle y que suenen varias a la vez
  detectamos si se está reproduciendo para que solo se ejecute el código
  la primera vez*/ 
function sonido(){
  if(soundon==false){
    song.play();
    soundon=true;
  }
}

function luz(){
  locX = mouseX - width / 2;
  locY = mouseY - height / 2;
  pointLight(250, 250, 250, locX, locY, 50);
  noStroke();

  /*Para que la luz afecte a la imagen, hay que ponerla
  como textura en un cuerpo sólido, como un rectángulo*/
  rect(0 - windowWidth/2, 0-windowHeight/2, windowWidth, windowHeight);
  texture(billie);
}

function movertexto(){
  textx += random(-5, 5);
  texty += random(-5, 5);
}