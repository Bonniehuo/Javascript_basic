// Class

// function
// function createCard(initName) {
//     this.name = initName
// }

// class 的基本操作
class Card{
    constructor(initName){
        this.name = initName
    }
}

const c1 = new Card("Bonnie")
console.log("c1:", c1);
console.log(c1.name);

// This depends on in which evironment you run your code
// this 指向的是当前的执行者，谁调用并执行该对象，谁就是this，若无当前调用对象，this则指代当前执行环境
class CardWithFunction{
    constructor(initName){
        this.name = initName
        //将this绑定到CardWithFunction上
        //每次新new一个object,就会自带一个helloo funtion, waste space sometimes
        // this.helloo = this.hello.bind(this)
    }
    // 或者在声明hello函数的时候，将其写成箭头函数，也可以将this绑定到CardWithFunction上
    hello = () => {
        console.log("Hello ", this.name);
    }
}
const c2 = new CardWithFunction("Jerome!")
console.log("c2", c2);
c2.hello()

const anotherName = {name: "Antoine"}
//这个时候this指的并不是Antoine, rather than Jerome! because this already bind in c2
anotherName.helloo = c2.hello
anotherName.helloo()

// 继承
class Car{
    constructor(initName){
        this.name = initName
    }
    start(){
        console.log("The car starts!");
    }
}

class Porshe extends Car{
    constructor(namePorche){
        super(namePorche)
    }
    start2(){
        super.start()
        console.log("刹车");
    }

    start(){
        super.start()
        console.log("Porshe start!");
    }
}

const P1 = new Porshe("保时捷")
P1.start()
P1.start2()
console.log("name:",P1.name);

