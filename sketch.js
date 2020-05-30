const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20);

    box1 = new Box(200,350,50,50);
    pig1 = new Pig(250,350);
    box2 = new Box(300,350,50,50);
    log1 = new Log(250,320,180,PI);
    
  box3 = new Box(200,290,50,50);
  pig2 = new Pig(250,290);
  box4 = new Box(300,290,50,50);
  log2 = new Log(250,250,180,PI);

log3 = new Log(200,220,80,-PI/4);
box5 = new Box(250,220,50,50);
log4 = new Log(300,220,80,PI/4)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
box3.display();
pig2.display();
box4.display();
log2.display();
log3.display();
box5.display();
log4.display();
}