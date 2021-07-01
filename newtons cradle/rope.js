class Rope{

constructor(body1,body2,pointA,pointB){
		this.pointA=pointA
		this.pointB=pointB
		

		var ropeoptions={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
		this.rope = Matter.Constraint.create(ropeoptions);
		World.add(world,this.rope);
	}
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(1.5);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
    }
}