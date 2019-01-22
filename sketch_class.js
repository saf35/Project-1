let img;

function preload(){
    img = loadImage('images/paws.png');
}

function setup(){
    createCanvas(800, 800);
    background(20,20,180);

}

function draw(){
    image(img, 100, 100, img.width/5, img.height/5);
}