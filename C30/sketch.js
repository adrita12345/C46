const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score;

function preload() {
    backgroundImg = loadImage("bg.jpg");
    girlImage = loadImage("sprites/grl.png");
    ringImage = loadImage("sprites/ring.png");
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    score=0;


    ground = new Ground(displayWidth/2,height,displayWidth,50);
    
    pillar1 = new Pole(displayWidth-150, displayHeight/2+166, 30, displayHeight/2+100 ); 
    pillar2 = new Pole(displayWidth-350, displayHeight/2+197, 30, displayHeight/2+250 );
    pillar3 = new Pole(displayWidth-550, displayHeight/2+306, 30, displayHeight/2 );
    pillar4 = new Pole(displayWidth-750, displayHeight/2+406, 30, displayHeight/2+300);
    
    ring = Bodies.circle(200, 650, 80);
    World.add(world, ring);

    girl = Bodies.rectangle(200, 700, 100, 500);
    World.add(world, girl);
    //girl.addImage(girlImage);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ring,{x:200, y:50});

    button1 = createButton("Library");
    button1.position(900, 350);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    


        ground.display();
        pillar1.display();
        pillar2.display();
        pillar3.display();
        pillar4.display();
       slingshot.display();

        imageMode(CENTER);
        image(girlImage, 180, 750,500, 400);

        imageMode(CENTER);
        image(ringImage, 300, 660, 80, 80);

        pillar1.collide(ground);

        console.log(ring);

ring.x = mouseX;
ring.y = mouseY;
}
function mouseDragged(){
    Matter.Body.setPosition(ring.body, {x: mouseX , y: mouseY});}



function mouseReleased(){
    slingshot.fly();}
