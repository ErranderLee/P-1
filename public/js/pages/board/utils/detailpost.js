import modifypost from "./modifypost.js";

export default function detailpost(under, post) {
    history.pushState(null, null, `/${document.title}/${post.postid}`)
    under.innerHTML = `<div id="detailpost">
        <span id="board">${post.board}</span>
        <span id="author">${post.author}</span>
        <span id="title">${post.title}</span>
        <span id="content">${post.content}</span>
        <button id="modify">수정하기</button>
        <button id="delete">삭제하기</button>
    </div>`

    const modifyBtn = document.querySelector("#modify");
    const deleteBtn = document.querySelector("#delete");

    modifyBtn.addEventListener('click', () => {
        modifypost(under, post);
    })
    deleteBtn.addEventListener('click', () => {
        const confirm = window.confirm("삭제하시겠습니까?");
        if (confirm) {
            fetch(`/post?postid=${post.postid}`, {
                method: 'DELETE'
            })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    history.pushState(null, null, '/');
                    window.dispatchEvent(new Event('locationchange'));
                }
            })
        }
    })
}