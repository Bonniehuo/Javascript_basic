
//Array
let classA = ["Silly", "Bonnie","Arret","Alex","Sophie"]
console.log("Avant:",classA);
classA.push("Nicolas")
console.log("first value:",classA[0]);
console.log("second value:",classA[1]);
console.log("third value:",classA[2]);
console.log("Apres:", classA);
console.log(classA.length);

// Object
const card = {
name: "Bonnie",
address: "Paris",
age: 29,
telephone: 1234
}
console.log("name:",card.name);
console.log("address:",card.address);
console.log("age:",card.age);
console.log(card);

const post = {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw337CDC5Zkg3oVaXK4dQTlf&ust=1628496860318000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCx49j9oPICFQAAAAAdAAAAABAD",
    desc: "a pic",
    date: "22/03/2021",
    comment: ["wow","pretty","cool","beautiful","awesome"]
}

const post2 = {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw337CDC5Zkg3oVaXK4dQTlf&ust=1628496860318000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCx49j9oPICFQAAAAAdAAAAABAD",
    desc: "a pic",
    date: "24/03/2021",
    comment: ["wow","pretty","cool","beautiful","awesome"]
}

const post3 = {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw337CDC5Zkg3oVaXK4dQTlf&ust=1628496860318000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCx49j9oPICFQAAAAAdAAAAABAD",
    desc: "a pic",
    date: "26/03/2021",
    comment: ["wow","pretty","cool","beautiful","awesome"]
}

const wall = {
    post,
    post2,
    post3
}

console.log("wall",wall);
