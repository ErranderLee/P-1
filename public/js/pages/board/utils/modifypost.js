export default function modifypost(post) {
    const under = document.querySelector(".under");
    const boardList = ["자유게시판", "비밀게시판", "정보게시판", "홍보게시판", "SW게시판"];
    const html = `<form class="form_post">
        <select class="selectboard" required>
            <option value="" disabled selected hidden>게시판을 선택해 주세요.</option>
            ${boardList.map(board => `<option value=${board}>${board}</option>`).join('')}
        </select>
        <input type="text" class=title placeholder="제목을 입력해 주세요" value=${post.title} required />
        <input type="text" class=content placeholder="내용" value=${post.content} required />
        <button class=modify>수정하기</button>  
    </form>`
    if (under === null) {
        const under = document.createElement("div");
        under.classList.add("under");
        under.innerHTML = html;
        document.body.appendChild(under);
    }
    else under.innerHTML = html
    
    const form = document.querySelector("form");
    const boardInput = document.querySelector("form .selectboard");
    const titleInput = document.querySelector("form .title");
    const contentInput = document.querySelector("form .content");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fetch(`/post?postid=${post.postid}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                board: boardInput.value,
                title: titleInput.value,
                content: contentInput.value,
            })
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.success) {
                history.pushState(null, null, '/');
                window.dispatchEvent(new Event('locationchange'));
            }
        });
    })
}
// 콤보박스에서 이전 값이 보이도록 해야함.