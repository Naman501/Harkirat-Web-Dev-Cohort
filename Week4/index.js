console.log('NAMAN')
let a=1;
let b=2;
function s(a,b){
    return a+b;
}


class Shape{
    constructor(color){
       this.color=color
    }
    paint(){
        return `SUPER Painting with ${this.color}`
    }
}

console.log(s(5,5))

class Rectangle extends Shape{
    constructor(width,height,color){
        super(color)
        this.width=width;
        this.height=height;
    }
    area(){
        const area=this.width*this.height
        return area
    }
 static whoami(){
    return "NAMAN"
}
// paint(){
//     console.log(`Paint with color:${this.color}`)
// }
}

const r=new Rectangle(2,4,"red")
console.log(r.area())
console.log(r.paint());

// console.log(r.whoami())
console.log(Rectangle.whoami())

const d=new Date()
console.log(d.getFullYear())
console.log(d.getMonth())

class Circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    area(){
        return 3.14*this.radius*this.radius
    }

    paint(){
   return `Paint with ${this.color}`    
    }
}

const c=new Circle(10,'pink')
console.log(c.area()+" "+c.paint())

class Square{
    constructor(side,color){
        this.side=side
        this.color=color
    }
    paint(){
        return `PAINT with ${this.color}`
    }

    area(){
        return this.side*this.side
    }
}

const p=new Square(10,"blue")
console.log(p.area()+" "+p.paint())



