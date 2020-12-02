class Polygon {
    constructor(x,y,radius){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':3.0
    }
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius;
    this.image=loadImage("polygon.png");
    World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 50,50);
      
    }
  }
  