var bg;
var spider;
let mousepress;
let tipo;
var bucle=-1000;
var song;
var soundon=false;

function preload() {
  bg= loadImage("billie.jpg");
  spider = loadImage('spider.png');
  tipo= loadFont("Sarpanch-SemiBold.ttf");
  tipob= loadFont("Lato-Bold.ttf");
  song= loadSound("youshouldseemeinacrown.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bg, 0 , 0, windowWidth, windowHeight);
}

function draw() {
  sonido();
  strokeWeight(8);
  textSize(100);
  textFont(tipo);
  stroke("#999999");
  text('BILLIE EILISH', bucle + 250, 70);

  textSize(50);
  textFont(tipob);
  stroke("#999999");
  text('YOU SHOULD SEE ME IN A CROWN OUT       JULY 18 2018', bucle, windowHeight-10);

  if(bucle>windowWidth){
    bucle=-900;
  }

  bucle+=5;

  if(mousepress==true){
    stroke(255);
    strokeWeight(0.5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed(){
  mousepress=true;
  stroke(250);
  strokeWeight(5);
  image(spider, mouseX-25, mouseY-25, 50, 50);
}

function mouseReleased(){
  mousepress=false;
}

function sonido(){
  if(soundon==false){
    song.play();
    soundon=true;
  }
}
