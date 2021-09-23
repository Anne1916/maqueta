class Log {
  constructor(x, y, height, angle) {
    var options = {
        restitution:0.8,
        friction:0.3,
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 20;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(225);
    rect(0, 0, this.width, this.height);
    pop();
  }
}






/*class Log{
    //parámetros = variables (datos) que vienen de afuera
    constructor(x,y,height, angle){
      //Box.body
      let options = {
        restitution: 0.08,
        friction: 1.0
      }
      this.body = Bodies.rectangle(x,y,20,height, options)
      this.width = 20
      this.height = height
      Matter.Body.setAngle(this.body, angle)
  
      World.add(world, this.body)
    }
    display(){
      let pos = this.body.position
      let angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(4)
      stroke('green')
      fill(225)
      rect(0, 0, this.width, this.height)
      pop()
    }
  }*/
  