
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7;
var background1;

function preload(){
  background1 = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
  stick1 = new stick(100,500,25,400);
  stick2 = new stick(600,500,25,400);
  stick3 = new stick(150,550,75,300);
  stick4 = new stick(550,550,75,300);
  stick5 = new stick(238,600,100,200);
  stick6 = new stick(462,600,100,200);
  stick7 = new stick(350,600,125,400);
}

function draw() {
  background(background1);  
  fill("white");
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  fill("blue");
triangle(350,280,288,400,410,400);
fill("red");
triangle(547,310,512,400,587,400);
fill("green");
triangle(147,310,112,400,186,400)
}
