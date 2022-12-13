function $(element) {
    return document.getElementById(element);
}

let commentSubmit = $('btn_add_comment');
const commentBox  = $('text_comment');
let commentList = $('list_comments');
console.log("commentblock.js loaded");

commentSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    let comment  = commentBox.value.trim();
    let newLI = document.createElement('li');

    localStorage.setItem(localStorage.length, comment);


    if (commentBox.value.length > 1) {
        comment = `<p class="comment">${comment}</p>`;
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
        let comment = `<p class="comment">${value}</p>`;
        newLI.innerHTML = comment;
        commentList.appendChild(newLI);
    }
}