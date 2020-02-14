console.log("03.class使用.js")
class Animal{
    constructor(name,age){
        //所有的类都具有构造器，重新定义会把默认的覆盖
        //[实例属性]
        this.name=name
        this.age=age
    }
}

const dog=new Animal("王多多",2)
console.log(dog)