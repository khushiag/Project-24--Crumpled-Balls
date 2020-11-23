class Dustbin{
    constructor(x, y, width, height) {


        var ground_options ={
            isStatic : true
        }
    
        this.image=loadImage("bin.png")

        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width
        this.height=height
        World.add(world,this.body);
    
    
    }

display() {
var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, 800, 322, this.width, this.height);
}

}