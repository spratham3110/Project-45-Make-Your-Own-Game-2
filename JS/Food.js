class Food extends BaseClass{
  constructor(x,y){
    var options = {
      'restitution':0,
      'friction':0,
      'density':0
    }
    super(x,y,50,50);
    this.image = loadImage("sprites/mushroom.png");
  }
}