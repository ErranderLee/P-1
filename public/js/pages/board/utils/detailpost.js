import deletepost from "./deletepost.js";

export default function detailpost(post) {
    const under = document.querySelector(".under");
    under.innerHTML = `<div class="detailpost">
        <span id="board">${post.board}</span>
        <span id="author">${post.author}</span>
        <span id="title">${post.title}</span>
        <span id="content">${post.content}</span>
        <button class="modify">수정하기</button>
        <button class="delete">삭제하기</button>
    </div>`

    const modifyBtn = document.querySelector(".modify");
    // 변수명 : handleModify 동사형으로
    const deleteBtn = document.querySelector(".delete");

    modifyBtn.addEventListener('click', () => {
        history.pushState(null, null, `${location.pathname}${location.search}&mode=m`);
        window.dispatchEvent(new Event('locationchange'));
    });
    // 화살표 함수 : 즉시실행 함수임.

    deleteBtn.addEventListener('click', () => deletepost(post));
}