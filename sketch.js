//const means constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();

    world = engine.world;

    var ground_options ={
         isStatic: true
    }

    ground= Bodies.rectangle(200,390,400,20, ground_options);

    var ball_options = {
        restitution: 1
    }
    
    ball=Bodies.circle(100,200,40, ball_options);
    World.add(world,ground);
    World.add(world,ball);

   
    //console.log(ground);
}


    function draw(){ 
    background("green");
    Engine.update(engine);
    rectMode(CENTER);
    fill("cyan");
    rect(ground.position.x,ground.position.y,400,20);

    fill("blue")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y, 40, 40);
}
