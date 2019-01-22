let img;

//From https://p5js.org/examples/input-constrain.html
var mx = 1;
var my = 1;
var easing = 0.05;
var radius = 24;
var edge = 100;
var inner = edge + radius;
//end referenced material

function preload(){
    img = loadImage('images/aaronphilip.png');
}

function setup(){
    
    createCanvas(1200, 600);
    background(200,30,70);
    //From https://p5js.org/examples/input-constrain.html
    noStroke(); 
    ellipseMode(RADIUS);
    rectMode(CORNERS);
    //end referenced material

}

function draw(){
    //From https://p5js.org/examples/input-constrain.html
    background(200,30,70);

    if (abs(mouseX - mx) > 0.1) {
        mx = mx + (mouseX - mx) * easing;
      }
      if (abs(mouseY - my) > 0.1) {
        my = my + (mouseY- my) * easing;
    }

    mx = constrain(mx, inner, width - inner);
    my = constrain(my, inner, height - inner);
    fill(200,195+minute(),70+second());
    rect(edge, edge, width-edge, height-edge);
    fill(255);
    //end referenced material
    image(img,100*mouseX/800,100*mouseY/800,img.width/2,img.height/2);

    //From https://p5js.org/reference/#/p5/lerpColor
    colorMode(RGB);
    let from = color(200,30,70);
    let to = color(200,195+minute(),70+second());
    colorMode(RGB); 
    let interA = lerpColor(from, to, 0.33);
    //end referenced material

    fill(interA);
    strokeWeight(3);
    stroke(230);
    text('Aaron Philip is a disabled, gender non-conforming trans girl. She is one of two models signed to a major agency in a wheelchair, and puts herself in the public spotlight to create space for other disabled and gender non-conforming people like her. I want to highlight Aaron in preparing for Black History Month because just as important as it is to reflect on our progress, it is equally important to praise those who carry our future.',
    400+(-100*mouseX/800),100+(-100*mouseY/800),790);
    textFont('Arial',26);
    
}