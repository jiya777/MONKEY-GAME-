var SurvivalTime

var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 FoodGroup=new Group();
  obstacleGroup=new Group();
}



function setup() {
 monkey=createSprite(30,315,20,20);
  monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);  
 ground.velocityX=-4; 
}


function draw() {
  
  background("white");
  stroke("black");
  fill("black");
  
  
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime="+SurvivalTime,100,50)
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if (ground.x < 0){
   ground.x=ground.width/2;
 console.log(ground.x); 
}
b();  
  obstacles();
  
drawSprites();
  
}

function b (){
if (frameCount % 80 === 0) {
   banana=createSprite(200,300,40,29)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y= Math.round(random(120,250));
  
  banana.velocityX=-7;
  
  banana.lifetime=30;
  FoodGroup.add(banana);
}
  
}
function obstacles(){
if (frameCount %300===0){
 obstacle=createSprite(200,327,45,45) ;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
 obstacle.velocityX=-5;
  obstacle.lifetime=40;
  obstacleGroup.add(obstacle)
}





}



