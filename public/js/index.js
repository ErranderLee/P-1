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
    if(username) {
        const signIn = document.querySelector(".signin");
        signIn.innerHTML = username;
    }
    match.route.view(username);
}

document.addEventListener("DOMContentLoaded", (e) => {
    router();
})

document.body.addEventListener("click", (event) => {
    if(event.target.matches("a")) {
        event.preventDefault();
        history.pushState(null, null, event.target.href);
        router();
    }
});

window.addEventListener('locationchange', () => {
    console.log('locationchange');
    router();
})

window.addEventListener("popstate", () => {
    router();
});
