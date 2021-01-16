var wall, thickness, bullet, speed, weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;
  bullet.shapeColor="black";
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,300)
  wall.shapeColor="grey";
}

function draw() {
  background(255,255,255); 
  var damage 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapeColor="green"
    }
    if(damage>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
  
}
function hasCollided(a,b){
  var bulletRightEdge=a.x+a.width;
  var wallLeftEdge=b.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else
  return false;
}