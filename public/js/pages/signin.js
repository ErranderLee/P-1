export default function signin() {
    document.title = "Sign In";

    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");

    upper.innerHTML = `<h2>AJOU Memo</h2>
    <span class="signin"><a href="/signin">Log In</a></span>`;
    
    under.innerHTML = `<form>
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="로그인">
    </form>
    <a href="/signup">회원가입</a>`;
}