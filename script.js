
let ul = document.querySelector('#messages > ul');

for (let i = 0; i < 100; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", "msg");
    let span = document.createElement("span");
    span.setAttribute("id","time");
    span.innerText = `10:${i}`;
    li.innerText = `Hello world ${i}`;
    li.appendChild(span);
    ul.appendChild(li);
    scrolly();
}

function scrolly(){
    let element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
}