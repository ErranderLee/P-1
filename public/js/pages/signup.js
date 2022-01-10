
export default function signup(username) {
    document.title = "Sign Up";

    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<form>
        <input type="text" placeholder="아이디를 입력하세요" required/>
        <input type="submit" value="회원가입">
    </form>
    <a href="/">나가기</a>`;
    const prevunder = document.querySelector("#under");
    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);

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
                window.dispatchEvent(new Event('locationchange'));
            } else {
                alert(result.msg);
            }
        })
        .catch((err) => console.error(err));
    });
}
