var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
drawSprites()
if (keyDown("up")){
  box.y=box.y-5
}
if (keyDown("down")){
  box.y=box.y+5
}
}




