export default function signin(innerHTML) {
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

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const loginInput = document.querySelector("form input:first-child");
        const username = loginInput.value;
        event.preventDefault();
        fetch('/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username })
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.success === true) {
                window.sessionStorage.setItem('authenticatedUser', JSON.stringify(username));
                history.pushState(null, null, '/');
            } else {
                alert(result.msg);
            }
        })
    })

}