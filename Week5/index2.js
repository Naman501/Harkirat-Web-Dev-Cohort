class Vehicle{
    constructor(type){
        this.type=type
    }

    detail(){
        return `Type:${this.type}`
    }

    rang(){
        return "on road"
    }
}

class car extends Vehicle{
    constructor(color,tyre,type){
        super(type)
        this.color=color;
        this.tyre=tyre;
// this.type=type
    }
}

const c=new car("red",4,"sedan")
console.log(c.rang())
console.log(c)
console.log(c.detail())