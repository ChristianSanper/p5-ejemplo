let w = 400;
let h= 600;

function setup(){
    createCanvas(windowWidth,windowHeight);
    //createCanvas(w,h);
    //createCanvas(400,400);
    background("yellow");
}

function draw(){
    // noStroke;
    background("yellow");
    strokeWeight(50);
    stroke("orange")
   fill("red")
    ellipse(width/2,height/2,100);
    ellipse(mouseX,mouseY,100);
    ellipse(mouseX+200,mouseY,100);
    //stroke("blue");
    stroke(20,mouseX,mouseY);
    strokeWeight(1);
    noFill();
    triangle(mouseX,mouseY,300,300,100,300);
    
    fill("grey");
    rectMode(CENTER);
    rect(100,200,200,200);
    //map(mouseX,0,width,0, 250);
}

//responsive
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}