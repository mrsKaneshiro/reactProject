console.log("03.class使用.js")
class Animal{
    constructor(name,age){
        //所有的类都具有构造器，重新定义会把默认的覆盖
        //[实例属性]：只能通过实例进行访问
        this.name=name
        this.age=age
    }
    //[静态属性]：只能通过构造函数或者类来访问
    static info="静态属性"
}

const dog=new Animal("王多多",2)
console.log("实例属性",dog.name)
console.log("静态属性",Animal.info)
