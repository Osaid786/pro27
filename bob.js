class Bob{
    constructor(x,y,radius){
        var options={
            'isStatic':true
             }
    this.body=Bodies.circle(x,y,50,options)
    this.radius=100
    World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        
        
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill("violet")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}