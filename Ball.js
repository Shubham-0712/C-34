class Ball{
    constructor(x, y) {
        var options = {
            'frictionAir':0.005,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, 2*this.radius, 2*this.radius);
        pop();
      }
}