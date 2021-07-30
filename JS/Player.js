class Player extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("sprites/player.png");
    var options = {
      'restitution':0.0,
      'friction':10.0,
      'density':1.0
  }
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();

  }



}
