export default function home(username) {
    document.title = "Home";

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
    
    
    under.innerHTML = `<a id="post" href="/post">등록하기</a>`;
}