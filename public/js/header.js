document.body.innerHTML = `<div id="upper">
    <span class="sidebutton"><button>side</button></span>
    <span class="title"><h2>AJOU Meomo</h2></span>
    <span class="signin"><a href="/signin">Log In</a></span>
</div>
<div class="sidebar hidden">
    <ul>
        <li><a href="/freeboard">자유게시판</a></li>
        <li><a href="/infoboard">정보게시판</a></li>
        <li><a href="/prboard">홍보게시판</a></li>
        <li><a href="/secretboard">비밀게시판</a></li>
        <li><a href="/swboard">SW게시판</a></li>
    </ul> 
</div>`;

const sideButton = document.querySelector(".sidebutton");
sideButton.addEventListener("click", (event) => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.classList.toggle("hidden");
})

