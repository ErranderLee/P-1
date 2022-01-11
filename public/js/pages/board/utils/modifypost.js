export default function modifypost(post) {
    const under = document.querySelector(".under");
    under.innerHTML = 
    `<div class="detailpost">
        <form class="form_post">
            <select class="selectboard" required>
                <option value="" disabled selected hidden>게시판을 선택해 주세요.</option>
                <option value="자유 게시판">자유 게시판</option>
                <option value="비밀 게시판">비밀 게시판</option>
                <option value="정보 게시판">정보 게시판</option>
                <option value="홍보 게시판">홍보 게시판</option>
                <option value="SW 게시판">SW 게시판</option>
            </select>
            <input type="text" class=title placeholder="제목을 입력해 주세요" value=${post.title} required />
            <input type="text" class=content placeholder="내용" value=${post.content} required />
            <button class=post_submit>수정하기</button>  
        </form>
    </div>`

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