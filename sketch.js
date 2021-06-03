const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,50)
    pig1 = new pig(810,350,50,50)
    log1 = new logs(810,260,20,300,PI/2)

    box3= new Box(700,240,70,70)
    box4= new Box(920,240,70,70)
    log2= new logs(810,180,20,300,PI/2)
    pig2 =new pig(810,220,50,50)

    box5 = new Box(810,160,70,70)
    log3= new logs(760,120,20,150,PI/7)
    log4= new logs(870,120,20,150,-PI/7)

    bird1= new Bird(100,200,50,50)
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
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    box5.display()
    bird1.display()

}