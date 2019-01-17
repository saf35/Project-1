function setup(){
    createCanvas(1600,800);
    if (second() < 20) {
        background(random(),255*minute()/60,255*second()/60);
    } else if (19 < second() < 40) {
        background(255*hour()/24,random(),255*(second()-20)/60);
    } else {
        background(255*hour()/24,255*minute()/60,random());
    }

}

function draw(){

    if (mouseIsPressed) {
        fill(200,255,200);
        ellipse(400,400,800,800);
        fill(200,200,255);
        ellipse(400,400,736,736);
        fill(255,200,200);
        ellipse(400,400,666,666);

        fill(150,255,150);
        ellipse(400,400,600,600);
        fill(150,150,255);
        ellipse(400,400,536,536);
        fill(255,150,150);
        ellipse(400,400,466,466);

        fill(100,255,100);
        ellipse(400,400,400,400);
        fill(100,100,255);
        ellipse(400,400,336,336);
        fill(255,100,100);
        ellipse(400,400,266,266);

        fill(50,255,50);
        ellipse(400,400,200,200);
        fill(50,50,255);
        ellipse(400,400,136,136);
        fill(255,50,50);
        ellipse(400,400,66,66);
    } else {
        fill(200,255,200);
        ellipse(400,400,800,800);

        fill(150,255,150);
        ellipse(400,400,600,600);

        fill(100,255,100);
        ellipse(400,400,400,400);

        fill(50,255,50);
        ellipse(400,400,200,200);
    }

    {
        textSize(32);
        if (mouseX < 401) {
            strokeWeight(3);
            stroke(255);
            if (mouseIsPressed) {
                fill('purple');
            } else {
                fill(0);
            }
            text('left',mouseX,mouseY);
        } else {
            strokeWeight(3);
            stroke(255);
            if (mouseIsPressed) {
                fill('orange');
            } else {
                fill('purple');
            }
            text('right', mouseX, mouseY);
        }
    }

    strokeWeight(3);
    stroke(255);
    fill(0);
    if ( keyIsPressed === true ) {
        text('Happy National Fig Newton Day in the U.S.!',1000,400);
    } else {
        text('Look below!',1000,50);
    }

}