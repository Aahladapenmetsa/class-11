var edges;
var trex ,trex_running;
var ground;
var ground_image;
var invisible_ground;

function preload(){
 
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
ground_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
    
  //to create a sprite for the terx and add a the animation.
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  edges = createEdgeSprites();

  ground = createSprite(200,180,600,20);
  ground.addImage(ground_image);
  ground.x = ground.width/2;

  invisible_ground = createSprite(200,190,600,10);
  invisible_ground.visible = false;
}

function draw(){
  background("white");

  ground.velocityX = -2;
  console.log(trex.y);
  if(ground.x<0){
  ground.x = ground.width/2
    }
  // to make the trex jump.
  if(keyDown("space") && trex.y>= 160){
  trex.velocityY = -10;
    }
  // gravity
  trex.velocityY = trex.velocityY+0.5
  trex.collide(invisible_ground);
  drawSprites();
}

