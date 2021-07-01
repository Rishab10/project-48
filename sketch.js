var man,pot,swing,slide,bench;
var ground,grass;
var benchImg,potImg,swingImg,slideImg,manImg,grassImg;








function preload(){
benchImg = loadImage("bench2.jpg");
potImg = loadImage("pot.jpg");
slideImg = loadImage("slide2.jpg");
swingImg = loadImage("swing.jpg");
manImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
grassImg = loadImage("grass.jpg");

}










function setup() {
  createCanvas(800,800);
  grass = createSprite(400,200,800,400);
  grass.addImage(grassImg);
  grass.scale = 2.5;
  grass.velocityY = -4;
  grass.y = grass.height/2;

  man = createSprite(400,200,50,50);
  man.addAnimation("manRunning",manImg);
 obstaclesGroup = new Group();
}

function draw() {
  background(0);  
  man.x = mouseX;

  if (grass.y < 0){
    grass.y = grass.height/2;
   }
   spawnObstacles();
  drawSprites();
  if(obstaclesGroup.isTouching(man)){
      obstacle.velocityY = 0;
      stroke("yellow");
      fill("yellow");
      textSize(30);
      text("Game Over", 230,250);
  }
}



function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityY = -2;
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(benchImg);
              break;
      case 2: obstacle.addImage(swingImg);
              break;
      case 3: obstacle.addImage(potImg);
              break;
      case 4: obstacle.addImage(slideImg);
      

    }
    
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}