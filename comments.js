function $(element) {
    return document.getElementById(element);
}

let commentSubmit = $('btn_add_comment');
const commentBox  = $('text_comment');
let commentList = $('list_comments');
console.log("commentblock.js loaded");

commentSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    let unix_timestamp = Date.now();
    let time = new Date(unix_timestamp).toLocaleString();
    let comment  = commentBox.value.trim();
    let newLI = document.createElement('li');
    localStorage.setItem(unix_timestamp, comment);


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
        var keyInt = parseInt(key)
        let time = new Date(keyInt).toLocaleString();
        let comment = `<p class="comment">${value}</p><p class="date"><b>Posted on: ${time}</b></p>`;
        newLI.innerHTML = comment;
        commentList.appendChild(newLI);
    }
}
