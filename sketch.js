const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var plinkos = []
var particle = []
var divisions = []
var ground1
var divisionHeight = 300
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height-10,width,20)
  for (var k = 0;k <= width; k = k+80){
    divisions.push(new Divider(k,height-divisionHeight/2,10,divisionHeight))
  }

    Engine.run(engine);
}

function draw() {
  background("black");  
  drawSprites();
  //divisions.display()
  ground1.display()
}