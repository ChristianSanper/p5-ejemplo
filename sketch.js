function setup() {
createCanvas(400, 400);
noStroke();
background('black')
}

function draw() {
  let boca_w= width/1.75;
  noStroke();
  
  push();
    translate(width/2,height/2);
    rectMode(CENTER);
    
  
    //fondo boca
    fill('red');
    rect(0,100,boca_w,200);
  
    //lengua
    fill(255,204,0);
    rect(0,150,boca_w,100,10);
  
    //dientes
    fill(255);
    rect(0,20,boca_w,50,10);
  
    //barba
    fill(0,0,255);
    rect(0,180,boca_w,100);
  
  pop();
  
  //frente
  fill(0,0,255);
  rect(0,0,width,height/1.8);
  
  //ojo izq
  fill(255);
  ellipse(width*0.25,height/2.5,40);
  fill('blue');
  ellipse(width*0.25,height/2.5,10);
  
  //ojo der
  fill(255);
  ellipse(width*0.75,height/2.5,40);
  fill('blue');
  ellipse(width*0.75,height/2.5,10);
  
  //nariz
  noFill();
  stroke(255);
  strokeWeight(10);
  arc(width*0.5,height/1.85,60,60,radians(230),radians(310));
}