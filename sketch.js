
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5
var bob1,bob2,bob3,bob4,bob5


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     box1=new Box(100,20);
     box2=new Box(150,20);
     box3=new Box(200,20);
     box4=new Box(250,20);
     box5=new Box(300,20);

	  bob1=new Bob(100,200);
    bob2=new Bob(150,200);
    bob3=new Bob(200,200);
    bob4=new Bob(250,200);
    bob5=new Bob(300,200);



	Engine.run(engine);
  
}


function draw() {
  background(220);
  Engine.update(engine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



