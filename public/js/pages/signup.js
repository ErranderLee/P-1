export default function signup() {
    document.title = "Sign In";

    const under = document.querySelector("#under");
    under.innerHTML = `<form>
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="회원가입">
    </form>
    <a href="/">나가기</a>`;
}