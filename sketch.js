var fixedrect,movingrect;

function setup() {
  createCanvas(400,400);
 fixedrect = createSprite(100,100,50,50);
 movingrect = createSprite(300,300,50,50); 
 fixedrect.shapeColor="blue";
  movingrect.shapeColor = "blue"; 
}

function draw() {
  background("green"); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="white";
    movingrect.shapeColor = "white"; 
  }
else{
  fixedrect.shapeColor="blue";
  movingrect.shapeColor = "blue";
}

  
  drawSprites();
}