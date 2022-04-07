
var fondo,fondoImage;
var obstacle, obstacleImage, obstaclesGroup;
var girl,girlRunning,girlStop;
var PLAY=1;
var END=0;
var gameState=PLAY;
var ground;
function preload(){

    girlRunning= loadAnimation("GirlRun.png","GirlRun2.png","GirlRun3.png");
    fondoImage=loadImage("fondo.png");
    obstacleImage=loadImage("obstacle.gif");




}

function setup() {
    createCanvas(700,600);
    

//sprite del fondo
fondo=createSprite(350,300);
fondo.addImage("fondo",fondoImage);



    //sprite del personaje
girl=createSprite(100,515,30,30); 
girl.addAnimation("running",girlRunning);
girl.scale=0.9
ground=createSprite(0,580,700,10)
ground.visible=false;
obstaclesGroup = new Group();

girl.debug=true

girl.depth=girl.depth+1;
girl.setCollider("rectangle",0,0,40,60)


}

function draw() {
    background(20,81,155);

  
  
    if(gameState==PLAY){

      if(fondo.x<300){
        fondo.x=350;
      }
      fondo.velocityX=-2;

     if(keyDown("space")&& girl.y>=515){
      girl.velocityY=-12;

     }

     girl.velocityY=girl.velocityY+0.8
   



      spawnObstacles();

      if(obstaclesGroup.isTouching(girl)){
        gameState=END;
        

      }
      girl.collide(ground)
          drawSprites()
    } 
    else if(gameState==END){

      fondo.velocityX=0;
    
      textSize(60)
      stroke("black")
      fill("pink")
      text("Fin Del Juego",185,300)

    }

  




  console.log(girl.y);
 
   
}


function spawnObstacles() {
   

    if(frameCount % 120 === 0) {
      var obstacle = createSprite(600,550,10,40);
      obstacle.addImage("obstaculo",obstacleImage);
      obstacle.scale=0.2;
      obstacle.lifetime = 300;
    
      obstacle.velocityX = -4;
obstaclesGroup.add(obstacle);

//obstacle.debug=true
obstacle.setCollider("circle",0,0,120)
obstacle.depth=girl.depth

    }
    }
