const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create ();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle (0, 370, 1200, 30, ground_options);
  World.add (world, ground);

  var ball_options = {
    restitution: 1
  }

  ball = Bodies.circle (200, 200, 20, ball_options);
  World.add (world, ball);
}

function draw() {
  background(0);  

  Engine.update (engine);

  rectMode (CENTER);
  rect (ground.position.x, ground.position.y, 1200, 30);
  ellipseMode (RADIUS);
  ellipse (ball.position.x, ball.position.y, 20, 20);

  drawSprites();
}