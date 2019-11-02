var fixedrect,movingrect;

function setup() {
  createCanvas(400,400);
 fixedrect = createSprite(100,100,50,50);
 movingrect = createSprite(100,300,50,50); 
 fixedrect.shapeColor="blue";
  movingrect.shapeColor = "blue";
  movingrect.velocityY = -4;
  fixedrect.velocityY = 4; 
}

function draw() {
  background("green"); 
  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
        movingrect.velocityX = movingrect.velocityX*(-1);
        fixedrect.velocityX = fixedrect.velocityX*(-1);
    }
   if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    
    movingrect.velocityY = movingrect.velocityY*(-1);
    fixedrect.velocityY = fixedrect.velocityY*(-1);
    
    }

  
  drawSprites();
}