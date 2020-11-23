
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, bin, gr;


function setup() {
	var canvas= createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  

	/*box1=createSprite(800,height-35,200,20);
	box1.shapeColor=color("black");	
	
	box2=createSprite(900,height-75,20,100);
	box2.shapeColor=color("black");	

	box3=createSprite(700,height-75.15,20,100);
	box3.shapeColor=color("black");	*/

  bin = new Dustbin(200,400,100,100);
  ball =new paper(100,358,30,30);
  gr = new Ground(600,383,1200,20);

  
}


function draw() {
  background("DodgerBlue");

  Engine.update(engine);

function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:800, y:height-45})
  }

}

  bin.display();
  ball.display();
  gr.display();
  
  drawSprites();
 
}



