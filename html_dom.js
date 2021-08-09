//The HTML DOM allows JavaScript to change the content of HTML elements.

// window.alert("!")
// document

// callback function
window.addEventListener("load", function name(params) {
    const p1 = document.getElementById("title")
    console.log(p1);
    p1.innerText = "I just wanna change!"
    console.log("load");

    const b1 = document.getElementById('btn')
    //监听
    b1.addEventListener('click',function name(params) {
        console.log("Click on!");
    })
    const box1 = document.getElementById('box')
    box1.innerHTML = '<p>Test</p>'

    const input1 = document.getElementById('input1')
    //监听
    input1.addEventListener('keyup',function (event) {
        console.log("event.target.value", event.target.value);
    })

})
