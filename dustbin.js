class dustbin
{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.thickness = 10;
        this.angle = 0;
        this.bottom = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
        this.left = Bodies.rectangle(this.x - this.thickness / 2, this.y - this.height / 2, this.width, this.thickness, this.height, {isStatic:true});
        Matter.Body.setAngle(this.left, this.angle);
        this.right = Bodies.rectangle(this.x + this.thickness / 2, this.y + this.height / 2, this.width, this.thickness, this.height, {isStatic:true});
        Matter.Body.setAngle(this.right, -1*this.angle);
        World.add(world, this.bottom)
        World.add(world, this.left)
        World.add(world, this.right)
    }

    display()

    {
        var bottomPosition = this.bottom.position;
        var leftPosition = this.left.position;
        var rightPosition = this.right.position;

        push();
        translate(bottomPosition.x, bottomPosition.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS)
        fill(255);
        rect(0,0, this.width, this.thickness);
        pop();

        push();
        translate(rightPosition.x, rightPosition.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS)
        fill(255);
        rotate(-1*this.angle);
        rect(0,0, this.thickness, this.height);
        pop();

        push();
        translate(leftPosition.x, leftPosition.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS)
        fill(255);
        rotate(this.angle);
        rect(0,0, this.thickness, this.height);
        pop();
    }
}