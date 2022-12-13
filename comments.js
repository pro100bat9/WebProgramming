function $(element) {
    return document.getElementById(element);
}

let commentSubmit = $('btn_add_comment');
const commentBox  = $('text_comment');
let commentList = $('list_comments');
console.log("commentblock.js loaded");

commentSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    const d = new Date();
    let time = d.toLocaleTimeString();
    let comment  = commentBox.value.trim();
    let newLI = document.createElement('li');

    localStorage.setItem(time, comment);


    if (commentBox.value.length > 1) {
        comment = `<p class="comment">${comment}</p><p class="date"><b>Posted on: ${time}</b></p>`;
        newLI.innerHTML = comment;
        commentList.appendChild(newLI);
        commentBox.value = '';
    }
}, false);

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let newLI = document.createElement('li');
        let comment = `<p class="comment">${value}</p><p class="date"><b>Posted on: ${key}</b></p>`;
        newLI.innerHTML = comment;
        commentList.appendChild(newLI);
    }
}