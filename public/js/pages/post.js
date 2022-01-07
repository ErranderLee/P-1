export default function post(username) {
    document.title = "글 등록";

    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");
    
    if(username) {
        upper.innerHTML = `<h2>AJOU Memo</h2>
        <span class="signin"></span>`;
        const signIn = document.querySelector("span");
        const loginUser = document.createElement("p");
        loginUser.innerText = username;
        signIn.appendChild(loginUser);
    } else {
        upper.innerHTML = `<h2>AJOU Memo</h2>
        <span class="signin"><a href="/signin">Log In</a></span>`;
    }

    under.innerHTML = `<form>
    <input type="text" placeholder="게시판을 선택해 주세요" required />
    <input type="text" placeholder="제목을 입력해 주세요" required />
    <input type="text" placeholder="내용" required />
    <input type="submit" value="글쓰기" />  
    </form>`;
}