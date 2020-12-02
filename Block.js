class Block {
    constructor(x,y,width,height) {
      var options = {
          //isStatic: false,
          'restitution':0.4,
          'friction':0.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
         push();
         this.visibility = this.visibility-5;
         tint(255,this.visibility);
         pop();
      }
    }
    blockScore(){
      if(this.visibility===0){
        score=score+5; 
      }
    }
  }