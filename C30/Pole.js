class Pole {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
   push();
    var pos =this.body.position;
    rectMode(CENTER);
    fill(128, 82, 9);
    rect(pos.x, pos.y, this.width, this.height);
    pop();}
};
