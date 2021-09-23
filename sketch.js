const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

//let bodies, engine, world, object

function setup(){
  let canvas = createCanvas(1200,400)
  engine = Engine.create()
  world = engine.world;

  //instanciar = crear un objeto
  //Un objeto es una instancia de una clase
  box1 = new Box(700,320,70,70)
  box2 = new Box(920,320,70,70)
  box3 = new Box(700,240,70,70)
  box4 = new Box(920,240,70,70)
  box5 = new Box(810,160,70,70)

  ground = new Ground(600,height,1200,20)

  pig1 = new Pig (810,350)
  pig2 = new Pig (810,220)

  log1 = new Log(810,260, 300, PI/2)
  log2 = new Log(810,180, 300, PI/2)
  log3 = new Log(760,120, 150, PI/7)
  log4 = new Log(870,120, 150, -PI/7)

  bird = new Bird(100,100)
/*
  object_options = {
    isStatic: false
  }

  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20, ground_options)
  World.add(world, ground)

  ball_options = {
    restitution: 1.2
  }

  ball = Bodies.circle(200,100,20, ball_options)
  World.add(world, ball)

  console.log(ground)
  console.log(object.position.x)
  console.log(object.position.y)*/
}

function draw(){
  background(0)
  Engine.update(engine)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  ground.display()

  pig1.display()
  pig2.display()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  bird.display()

  /*rectMode(CENTER)
  rect(200,200,50,50) 
  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)*/
  
}


