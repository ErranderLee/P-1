export default function signin(username) {
    document.title = "Sign In";

    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<form id="form_sign">
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="로그인">
    </form>
    <a href="/signup">회원가입</a>`;
    const prevunder = document.querySelector("#under");
    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);

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
                window.dispatchEvent(new Event('locationchange'));
            } else {
                alert(result.msg);
            }
        })
    })

}