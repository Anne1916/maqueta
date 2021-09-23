class Box{
  //parámetros = variables (datos) que vienen de afuera
  constructor(x,y,width,height){
    //Box.body
    let options = {
      restitution: 0.08,
      friction: 1.0
    }
    this.body = Bodies.rectangle(x,y,width,height, options)
    this.width = width
    this.height = height

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
}































/*class Box{
    constructor(x,y,width,height){
      let options = {
        'restitution': 0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world, this.body)
    }
  
    display(){
      let pos = this.body.position;
      rectMode(CENTER)
      fill(225)
      rect(pos.x, pos.y, this.width, this.height)
    }
  };

*/