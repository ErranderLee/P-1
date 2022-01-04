export default function home() {
    document.title = "Home";

    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");

    upper.innerHTML = `<h2>AJOU Memo</h2>
    <span class="signin"><a href="/signin">Log In</a></span>`;
    
    under.innerHTML = `<a id="post" href="/post">등록하기</a>`;
}