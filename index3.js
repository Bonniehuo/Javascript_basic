if(100 > 50){
    console.log(true);
}else{
    console.log(false);
}

// && || ! 逻辑运算
let score = 100
let condition = score === 100
console.log("condition",condition);

// (score === 100)  compare (score !== 100)
if (condition){
    console.log("Bravo!")   
}else{
    console.log("Bon corage!")
}


// switch case
let key = 100
switch (key) {
    case 100:
        console.log("score is 100");
        break;
        case 200:
            console.log("score is 200");
            break;
            case 300:
                console.log("score is 3300");
                break;
    default:
        break;
}