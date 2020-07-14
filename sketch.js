var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redzonep1,redzonep2,redzonep3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	redzonep1=new Redzone(width/2,640,200,20);
	redzonep2=new Redzone((width/2)-90,580,20,100);
	redzonep3=new Redzone((width/2)+90,580,20,100);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	redzonep1.display();
	redzonep2.display();
	redzonep3.display();
	drawSprites();
	keyPressed();
	packageSprite.collide(groundSprite)
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
    	// Look at the hints in the document and understand how to make the package body fall only on
		packageSprite.velocityY=packageSprite.velocityY+0.1;
		Matter.Body.setStatic(packageBody,false);
	}
}



