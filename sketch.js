const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height-15,1200);
    ground2 = new Ground2(670,height*3/4-15,1060);
    ground3 = new Ground1(530,height/2-15,1060);
    ground4 = new Ground2(670,height*1/4-15,1060);

    obstacle1 = new Obstacle(700,320);
    obstacle2 = new Obstacle(920,320);
    obstacle3 = new Obstacle(700,240);
    obstacle4 = new Obstacle(920,240);
    obstacle5 = new Obstacle(810,160);

    enemy1 = new Enemy(810, 450);
    //enemy2 = new Enemy(810, 220);

    food1 = new Food(180,935);
    food2 = new Food(810,180);
    food3 = new Food(760,180);
    food4 = new Food(870,180);

    player = new Player(200,50);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    enemy1.display();
    //enemy2.display();

    food1.display();
    food2.display();
    food3.display();
    food4.display();

    player.display();

}