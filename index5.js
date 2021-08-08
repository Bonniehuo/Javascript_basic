// function

function hello() {
    console.log("Bonjour!");
}

function hello1() {
    console.log("Hello!");
}

function hello2() {
    console.log("你好!");
}

hello()
hello1()
hello2()
// with values, without return
function addMoney(price1, price2) {
    console.log(price1 + price2);
}
addMoney(100, 200)

//with values, with return
function addMoney(price1, price2,discount) {
    let result = price1 + price2 - discount
    let message = "普通会员"
    if (result > 2000) {
        message = "白金会员"
        return message
    } else if (result > 1000) {
        return message = "白银会员"
    } else {
        return message 
     }
    // return result
}
let message = addMoney(10000, 200, 50)
console.log("meg:", message);
  

//构造函数
// This in function
// 在执行函数时，如果函数中的this是被上一级的对象所调用，
//那么this指向的就是上一级的对象；否则指向全局环境。
function createCard(initName) {
    this.cardName = initName
}
const a1 = new createCard("Bonnie")
const a2 = new createCard("Bonnie2")
const a3 = new createCard("Bonnie3")
const a4 = new createCard("Bonnie4")
const a5 = new createCard("Bonnie5")
const a6 = new createCard("Bonnie6")
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);

// This examples
const o1 = {
    text: 'o1',
    fn: function() {
        return this.text
    }
}
    console.log(o1.fn())

const o2 = {
    text: 'o2',
    fn: function() {
        return o1.fn()
    }
}
console.log(o2.fn())

const o3 = {
    text: 'o3',
    fn: function() {
        var fn = o1.fn
        return fn()
    }
}
    console.log(o3.fn())
    // o3 中的fn未声明就调用，this指向得是当前的运行环境windows，因此是undefined.

// declare function
function hello() {
}
let hello5 = function(){}

//箭头函数
let hello6 = () => {}