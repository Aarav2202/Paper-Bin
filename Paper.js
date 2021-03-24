class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:1			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
            rotate(this.body.angle);
			imageMode(CENTER)
			//strokeWeight(4);
			
			image(this.image,0,0,this.r*2, this.r*2);
			pop()
			
	}

}