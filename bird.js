class Bird{
    //parámetros = variables (datos) que vienen de afuera
    constructor(x,y){
      //Box.body
      let options = {
        restitution: 0.08,
       // friction: 1.0
      }
      this.body = Bodies.rectangle(x,y,50,50, options)
      this.width = 50
      this.height = 50
  
      World.add(world, this.body)
    }
    display(){
      let pos = this.body.position
      pos.x = mouseX
      pos.y = mouseY
      let angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(3)
      stroke('blue')
      fill('green')
      rect(0, 0, this.width, this.height)
      pop()
    }
  }