class Pig {
    constructor(x,y){
      var options = {
          restitution : 0.8,
          friction : 0.3
      }
     this.body= Bodies.rectangle(x,y,50,50,options);
     this.width=50;
     this.height=50;
     World.add(world,this.body);

    }
   
    display(){
        var ps = this.body.position;
        push();
        rectMode(CENTER);
        translate(ps.x,ps.y);
        rotate(this.body.angle);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();   
    }
 



}