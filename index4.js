// for && while

// for
let array = [10,9,8,7,6,5,4,3,2,1]
for (let i = 0; i < array.length; i+=2) {
    const number = array[i];
    console.log(number);
}

let classA = [100,70, 58]
for (let i = 0; i < classA.length; i++) {
    const element = classA[i];
    console.log(element);
}


// while
let condition = true
let target = 10
let i = 1
while (condition) {
    if (i === target) {
        condition = false
    }
    console.log(i);
    i++
}