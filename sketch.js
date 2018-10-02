function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);

  frameRate(12);
}

function draw() {

  //linee
  push();
  noFill();
  stroke(0);
  translate(width/2, height/2);
  //rotate(frameCount*9);
  stroke(0);
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();

  //pallina
  translate(width/2,height/2);
  rotate(frameCount*3);
  stroke('#181818');
  ellipse(210,0,10,10);



  // Stops the draw function if a certain condition avaluates true
  if (frameCount == 120) {
    noLoop();
  }

}
