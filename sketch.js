let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background('black');
    let boca_w = width / 1.65;
    noStroke();

    micLevel=mic.getLevel();
    console.log(micLevel);
    
    mov=map(micLevel,0,1,10,150);
    //de micLevel: el minimo 0 pasa a ser 10 y el maximo 1 pasa a ser 300

    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);


    //mandibula
    fill(0,0,255);
    rect(0, 100, boca_w+30, 400);
    
    //fondo boca
    fill('red');
    rect(0, 100+mov*1.7, boca_w, 400);

    //lengua
    fill(255, 204, 0);
    rect(0, 115+mov*2, boca_w-40, 130, 10);

    //dientes superiores
    fill(255);
    rect(0, 10+(mov*0.2), boca_w-20, 100, 10);
    
    //dientes inferiores
    fill(255);
    rect(0, 130+mov*2, boca_w-20, 140, 10);

    //barbilla
    fill(0, 0, 255);
    rect(0, 190+mov*2, boca_w+30, 220);

    pop();

    //frente
    fill(0,0,255);
    rect(0, 0, width, height / 1.8 );

    //ojo izq
    fill(255);
    ellipse(width * 0.25, height / 2.5, 40+(mov+0.7));
    fill('blue');
    ellipse(width * 0.25, height / 2.5, 10+(mov*0.5));

    //ojo der
    fill(255);
   ellipse(width * 0.75, height / 2.5, 40+(mov+0.7));
    fill('blue');
    ellipse(width * 0.75, height / 2.5, 10+(mov*0.5));

    //nariz
    noFill();
    stroke(255);
    strokeWeight(10);
    arc(width * 0.5, height / 1.85, 60, 60, radians(230), radians(310));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function touchStarted(){
    getAudioContext().resume();
}
