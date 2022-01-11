import deletepost from "./deletepost.js";
import modifypost from "./modifypost.js";

export default function detailpost(under, post) {
    history.pushState(null, null, `/${document.title}/${post.postid}`);
    under.innerHTML = `<div id="detailpost">
        <span id="board">${post.board}</span>
        <span id="author">${post.author}</span>
        <span id="title">${post.title}</span>
        <span id="content">${post.content}</span>
        <button id="modify">수정하기</button>
        <button id="delete">삭제하기</button>
    </div>`

    const modifyBtn = document.querySelector("#modify");
    // 변수명 : handleModify 동사형으로
    const deleteBtn = document.querySelector("#delete");

    modifyBtn.addEventListener('click', () => modifypost(under, post));
    // 화살표 함수 : 즉시실행 함수임.

    deleteBtn.addEventListener('click', () => deletepost(post));
}