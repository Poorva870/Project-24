class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 80;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };