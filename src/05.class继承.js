class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayPerson(){
        console.log("父亲好")
    }
}
class American extends Person{
    //new American() 
    //American的constructor->super->Person的constructor
    constructor(name,age,ID){
        //子构造器可以，继承父类属性，定义子属性，非外部传来属性
        //super 是调用了父类的构造器，向其中传入继承属性
        super(name,age)
        this.ID=ID //ID是子类的实例属性
        this.data=[1,2,3]
    }
    sayName(){
        console.log("我自己")
    }
    sayData(){
        console.log(this.data)
    }
}
const ame=new American("cindy","23","888888888888892827");
ame.sayName()  //我自己
ame.sayPerson()  //父亲好
ame.sayData()