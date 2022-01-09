
export default function signup(innerHTML) {
    document.title = "Sign Up";

    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");

    upper.innerHTML = `<h2>AJOU Memo</h2>
    <span class="signin"><a href="/signin">Log In</a></span>`;

    under.innerHTML = `<form>
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="회원가입">
    </form>
    <a href="/">나가기</a>`;

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const loginInput = document.querySelector("form input:first-child");
        const username = loginInput.value;
        // form.classList.add("hidden");
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username })
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.success === true) {
                history.pushState(null, null, "/signin");
            } else {
                alert(result.msg);
            }
        })
        .catch((err) => console.error(err));
    });
}
