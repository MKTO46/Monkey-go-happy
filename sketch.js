
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  BackgroundI = loadImage("image.jpg")
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  foodGroup = createGroup()
  obstacleGroup = createGroup()
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  Background = createSprite(300,300,600,600)
  Background.addImage(BackgroundI)
}


function draw() {
background(255)
   
  if(ground.x <0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  monkey.collide(ground)
  food()
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
  }
  obstacles()
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
  Food = createSprite(400,Math.round(random(50,250)),30,30)
  Food.velocityX = -3
  Food.addImage(bananaImage)
  Food.scale = 0.1
    foodGroup.add(Food)
}
}

function obstacles(){
  if(frameCount % 80 === 0){
  obstacle = createSprite(400,315,30,30)
  obstacle.velocityX = -3
  obstacle.addImage( obstacleImage)
  obstacle.scale = 0.2
    obstacleGroup.add(obstacle)
}
}



