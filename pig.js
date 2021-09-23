class Pig {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
      var pos = this.body.position;
      let angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }






/*class Pig{
    //parámetros = variables (datos) que vienen de afuera
    constructor(x,y){
      //Box.body
      let options = {
        restitution: 0.08
      }
      this.body = Bodies.rectangle(x,y,50,50,options)
      this.width = 50
      this.height = 50
  
      World.add(world, this.body)
    }
    display(){
      let pos = this.body.position
      let angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      //strokeWeight(4)
      //stroke('green')
      fill('red')
      rect(0, 0, this.width, this.height)
      pop()
    }
  }*/
  