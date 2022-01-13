import deletepost from "./deletepost.js";

export default function detailpost(post) {
    const under = document.querySelector(".under");
    const html = `<div class="detailpost">
        <span class="board">${post.board}</span>
        <span class="author">${post.author}</span>
        <span class="title">${post.title}</span>
        <span class="content">${post.content}</span>
        <button class="modify">수정하기</button>
        <button class="delete">삭제하기</button>
    </div>`
    if(under === null) {
        const under = document.createElement("div");
        under.classList.add("under");
        under.innerHTML = html;
        document.body.appendChild(under);
    }
    else under.innerHTML = html;

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