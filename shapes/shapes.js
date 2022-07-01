class ShapesCanvas{
    constructor(){
        this.canvas = document.getElementById("shapesCnvs");
        this.ctx = this.canvas.getContext('2d');
        this.circle = new Circle( 100, 100, document.getElementById("circleRange").value, document.getElementById("circleColorInput").value);
        this.triangle=new Triangle(document.getElementById("numberX1").value, document.getElementById("numberY1").value, document.getElementById("numberX2").value, document.getElementById("numberY2").value, document.getElementById("numberX3").value, document.getElementById("numberY3").value, document.getElementById("triangleColorInput").value)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.square=new Square(20, 150, 100, 100, document.getElementById("squareColorInput").value)
    }

    draw(){
        this.circle.drawCircle(this.ctx)
        this.triangle.drawTriangle(this.ctx)
        this.square.drawSquare(this.ctx)
    }
}

class Circle{
    constructor(x,y,radius, color ){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.strokeStyle=this.color;
        ctx.arc(this.x, this.y,this.radius, 0, Math.PI*2, false);
        ctx.stroke()
    }
}

class Triangle{
    constructor(x1, y1, x2, y2, x3, y3, color){
        this.x1=x1
        this.y1=y1
        this.x2=x2
        this.y2=y2
        this.x3=x3
        this.y3=y3
        this.color=color;
    }
    drawTriangle(ctx){
        ctx.beginPath();
        ctx.strokeStyle=this.color;
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.closePath()
        ctx.stroke();
    }
    
}

class Square{
    constructor(x, y, width, height, color){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;
    }
     drawSquare(ctx){
         ctx.beginPath();
         ctx.strokeStyle=this.color;
         ctx.rect(this.x, this.y, this.width, this.height);
         ctx.stroke();
     }
}