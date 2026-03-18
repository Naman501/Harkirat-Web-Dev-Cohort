class Animal{
    constructor(sound){
        
        this.sound=sound
    }

    sounding(){
        return `noise:${this.sound}`
    }
}

class Dog extends Animal{
    constructor(legs,name,sound){
        super(sound)
        this.name=name
        this.legs=legs
    }

}

const d=new Dog(5,"shera","bark")
console.log(d.sounding())