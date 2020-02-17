//class 是使用原型构造的原理
//静态方法和静态属性都挂载在了构造器里，
//实例方法挂在了原型链中
//实例属性就在这个对象中
class Person{
    constructor(name){
        this.name=name
    }

    static s_name = "静态属性"
    
    //只能通过Person类来调用
    static s_sayName(){
        console.log("静态方法")
    }
    //等价于用原型链实现--不占内存的调用实例方法
    /*Person.prototype.sayName(){}*/
    sayName(){
        console.log("实例方法",this.name)
    }
}

var p=new Person("aaa")
console.log(p)