const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const deletBtn = document.getElementById('deletBtn')
const list = document.getElementById('list')

const listContent = []

 //渲染页面的list
function render() {
    let htmlStr = ''
    //console.log(listContent);
    listContent.forEach(function (item) {
        // JavaScript Template Literals, using back-ticks (``) 
        htmlStr = htmlStr + 
        `
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>时间：${item.date} ${item.time}</p>
            </div>
        </div>
        `
        console.log("item:", item);
    })
    list.innerHTML = htmlStr
}

//新增按钮做事件处理，装个监听器
addBtn.addEventListener("click", function () {
    console.log(content.value);
    console.log(date.value);
    console.log(time.value);
// insert after list
    // listContent.push({
    //     content: content.value,
    //     date: date.value,
    //     time: time.value
    // })
// insert before list
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    render()
})

deletBtn.addEventListener("click",function () {
    // delete from the last one
    listContent.pop()
    // delete from the first one
    // listContent.shift()
    
    //渲染页面的list
    render()
})