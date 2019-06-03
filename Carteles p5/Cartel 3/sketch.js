var monst;
var monst2;
let e1,e2, e3,e4;
var song;
var soundon=false;
var germania;
var glor;
let tamaño;

function preload(){
  monst= loadImage("monster.png");
  monst2= loadImage("monster2.png");
  song= loadSound("badguy.mp3");
  germania= loadFont("GermaniaOne-Regular.ttf");
  glor=loadFont("GloriaHallelujah.ttf");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //background(0);
  noStroke();
  e1 = new Eye(230, 140, 15);
  e2 = new Eye(140, 135, 15);
  e3 = new Eye(windowWidth-140, 130, 15);
  e4 = new Eye(windowWidth-230, 135, 15);

  setInterval(function(){ 
    tamaño=100;
  }, 500);

  setInterval(function(){ 
    tamaño=130;
  }, 1000);

  textAlign(CENTER);
}

function draw(){
  background(0);
  textSize(tamaño);
  textFont(germania);
  fill("#BF0202");
  text('BAD GUY', windowWidth/2, 250);

  textSize(30);
  textFont(glor);
  text('Billie Eilish', windowWidth/2, 400);
  sonido();

  image(monst,0, 70, 250, 400);
  image(monst2, windowWidth-250, 70, 250, 400);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e4.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
  e4.display();


}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(0);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill("#BF0202");
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

function sonido(){
  if(soundon==false){
    song.play();
    soundon=true;
  }
}
