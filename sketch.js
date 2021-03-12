var car,wall;

function setup() {
 createCanvas(1000,1000);
  car = createSprite(10, 500, 100, 10);
  car.shapeColour = "red";
  wall = createSprite(700,500,30,300);
  wall.shapeColour = "red";
}

function draw() {
  background(255,255,255); 
   car.velocityX= 15.0;

  
   car.bounceOff(wall);
   if (car.isTouching(wall)) {
    wall.shapeColor = "blue";
    car.setVelocity(0, 0);
  }
  drawSprites();
}

 