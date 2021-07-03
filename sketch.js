const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var iron;
var ball1, ball2, ball3, ball4, ball5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(200, 500, 80, 60);
    rubber = new Rubber(530, 440, 70);
    iron = new Iron(800, 500, 80, 50);
    ball1 = new Ball(400, 500, 10);
    ball2 = new Ball(400.5, 500, 10);
    ball3 = new Ball(401, 500, 10);
    ball4 = new Ball(401.5, 500, 10);
    ball5 = new Ball(402, 500, 10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
}