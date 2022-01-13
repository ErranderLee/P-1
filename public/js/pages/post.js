export default function post(username) {
    document.title = "글 등록";

    const under = document.createElement("div");
    const boardList = ["자유게시판", "비밀게시판", "정보게시판", "홍보게시판", "SW게시판"];
    under.classList.add("under");
    under.innerHTML = `<form class="form_post">
        <select class="selectboard" required>
            <option value="" disabled selected hidden>게시판을 선택해 주세요.</option>
            ${boardList.map(board => `<option value=${board}>${board}</option>`).join('')}
        </select>
        <input type="text" class=title placeholder="제목을 입력해 주세요" required />
        <input type="text" class=content placeholder="내용" required />
        <input type="submit" class=post_submit value="글쓰기" />  
    </form>`;
    const prevunder = document.querySelector(".under");
    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);

    const form = document.querySelector("form");
    const boardInput = document.querySelector("form .selectboard");
    const titleInput = document.querySelector("form .title");
    const contentInput = document.querySelector("form .content");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        fetch('/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                board: boardInput.value,
                title: titleInput.value,
                content: contentInput.value,
                author: username,
            })
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.success) {
                history.pushState(null, null, '/');
                window.dispatchEvent(new Event('locationchange'));
            }
        });
    });
}