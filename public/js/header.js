const Notice = [
    {href:'/freeboard',title:'자유게시판'},
    {href:'/infoboard',title:'정보게시판'},
    {href:'/prboard',title:'홍보게시판'},
    {href:'/secretboard',title:'비밀게시판'},
    {href:'/swboard',title:'SW게시판'},
]
document.body.innerHTML = `<div class="upper">
    <span class="sidebutton"><button>side</button></span>
    <span class="headertitle"><h2>AJOU Memo</h2></span>
    <span class="signin"><a href="/signin">Log In</a></span>
</div>
<div class="sidebar hidden">
    <ul class="menu">
        ${Notice.map(element=>{
            const {href,title} = element;
            return `<li><a href="${href}">${title}</a></li>`
        }).join('')}
    </ul> 
</div>`;

const sideButton = document.querySelector(".sidebutton");
const title = document.querySelector(".headertitle");
const sideBar = document.querySelector(".sidebar");

sideButton.addEventListener("click", (event) => {
    sideBar.classList.toggle("hidden");
})

title.addEventListener("click", () => {
    history.pushState(null, null, '/');
    window.dispatchEvent(new Event('locationchange'));
});



