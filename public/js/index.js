import freeboard from './pages/board/freeboard.js';
import infoboard from './pages/board/infoboard.js';
import prboard from './pages/board/prboard.js';
import secretboard from './pages/board/secretboard.js';
import swboard from './pages/board/swboard.js';
import signin from './pages/signin.js';
import post from './pages/post.js';
import signup from './pages/signup.js';


const router = () => {
    const routes = [
        { path:"/", view: freeboard },
        { path:"/freeboard", view: freeboard },
        { path:"/infoboard", view: infoboard },
        { path:"/prboard", view: prboard },
        { path:"/secretboard", view: secretboard },
        { path:"/swboard", view: swboard },
        { path:"/signin", view: signin },
        { path:"/signup", view: signup },
        { path:"/post", view: post }
    ];
    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    const username = JSON.parse(window.sessionStorage.getItem('authenticatedUser'));
    const innerHTML = {};
    console.log(location);
    if(username) {
        innerHTML.upperInnerHTML = `<h2>AJOU Memo</h2>
        <span class="signin">${username}</span>
        <div id="sidebar">
                <a href="/freeboard">자유게시판</a>
                <a href="/infoboard">정보게시판</a>
                <a href="/prboard">홍보게시판</a>
                <a href="/secretboard">비밀게시판</a>
                <a href="/swboard">SW게시판</a>
            </div>`;
        innerHTML.underInnerHTML = `<a id="post" href="/post">등록하기</a>`;
        innerHTML.username = username;
    } else {
        innerHTML.upperInnerHTML = `<h2>AJOU Memo</h2>
        <span class="signin"><a href="/signin">Log In</a></span>
        <div id="sidebar">
                <a href="/freeboard">자유게시판</a>
                <a href="/infoboard">정보게시판</a>
                <a href="/prboard">홍보게시판</a>
                <a href="/secretboard">비밀게시판</a>
                <a href="/swboard">SW게시판</a>
            </div>`;
        innerHTML.underInnerHTML = `<a id="post" href="/post">등록하기</a>`;
        innerHTML.username = null;
    }
    
    match.route.view(innerHTML);
}

history.pushState = ( f => function pushState(){
    f.apply(this, arguments);
    window.dispatchEvent(new Event('locationchange'));
})(history.pushState);

document.addEventListener("DOMContentLoaded", (e) => {
    document.body.addEventListener("click", (event) => {
        if(event.target.matches("a")) {
            event.preventDefault();
            history.pushState(null, null, event.target.href);
            router();
        }
    });
    router();
})

window.addEventListener('locationchange', () => {
    router();
})

window.addEventListener("popstate", () => {
    router();
});
