const Notice = [
    {href:'/freeboard',title:'자유게시판'},
    {href:'/infoboard',title:'정보게시판'},
    {href:'/prboard',title:'홍보게시판'},
    {href:'/secretboard',title:'비밀게시판'},
    {href:'/swboard',title:'SW게시판'},
]
document.body.innerHTML = `<div id="upper">
    <span class="sidebutton"><button>side</button></span>
    <span class="title"><h2>AJOU Meomo</h2></span>
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
// document.body.innerHTML = `<div id="upper">
//     <span class="sidebutton"><button>side</button></span>
//     <span class="title"><h2>AJOU Meomo</h2></span>
//     <span class="signin"><a href="/signin">Log In</a></span>
// </div>
// <div class="sidebar hidden">
//     <ul class="menu">
//         <li><a href="/freeboard">자유게시판</a></li>
//         <li><a href="/infoboard">정보게시판</a></li>
//         <li><a href="/prboard">홍보게시판</a></li>
//         <li><a href="/secretboard">비밀게시판</a></li>
//         <li><a href="/swboard">SW게시판</a></li>
//     </ul> 
// </div>`;

const sideButton = document.querySelector(".sidebutton");
const title = document.querySelector(".title");
const sideBar = document.querySelector(".sidebar");

sideButton.addEventListener("click", (event) => {
    sideBar.classList.toggle("hidden");
})

title.addEventListener("click", () => {
    history.pushState(null, null, '/');
    window.dispatchEvent(new Event('locationchange'));
});



