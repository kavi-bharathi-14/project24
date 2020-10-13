
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, paperObject,ground;
function preload()
{
	
}


	
	function setup() {
		createCanvas(1250, 650);
		rectMode(CENTER);
	
	
		engine = Engine.create();
		world = engine.world;
		fill("yellow");
		paperObject=new Paper(200,450,70);
		
		ground=Bodies.rectangle(width/2,620,width,20,{isStatic:true});
		ground.shapColor=color(0,0,0);
		World.add(world,ground);

		dustbin1=new Dustbin(1200,510,20,200);
		dustbin2=new Dustbin(1000,510,20,200);
		dustbin3=new Dustbin(1100,600,200,20);
		
	
	
		Engine.run(engine);
	  
	}
	
	
	function draw() {
	  rectMode(CENTER);
	  background(100);
	 
	  
	  paperObject.display();
	
	  dustbin1.display();
	  dustbin2.display();
	  dustbin3.display();
	  rect(width/2,620,width,20);
	}
	
	function keyPressed() {
		if (keyCode === UP_ARROW) {
	
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	
	  
		}
	}



