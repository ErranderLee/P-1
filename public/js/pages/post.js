export default function post(innerHTML) {
    document.title = "글 등록";

    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");
    
    upper.innerHTML = innerHTML.upperInnerHTML;
    under.innerHTML = `<form>
        <select id="board" required>
            <option value="" disabled selected hidden>게시판을 선택해 주세요.</option>
            <option value="자유 게시판">자유 게시판</option>
            <option value="비밀 게시판">비밀 게시판</option>
            <option value="정보 게시판">정보 게시판</option>
            <option value="홍보 게시판">홍보 게시판</option>
            <option value="SW 게시판">SW 게시판</option>
        </select>
        <input type="text" id=title placeholder="제목을 입력해 주세요" required />
        <input type="text" id=content placeholder="내용" required />
        <input type="submit" value="글쓰기" />  
    </form>`;

    const username = innerHTML.username;
    const form = document.querySelector("form");
    const boardInput = document.querySelector("form #board");
    const titleInput = document.querySelector("form #title");
    const contentInput = document.querySelector("form #content");

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
            }
        });
    });
}