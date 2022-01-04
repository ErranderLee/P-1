import home from './pages/home.js';
import signin from './pages/signin.js';
import post from './pages/post.js';
import signup from './pages/signup.js';

const router = () => {
    const routes = [
        { path:"/", view: home },
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

    match.route.view();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if(event.target.matches("a")) {
            event.preventDefault();
            history.pushState(null, null, event.target.href);
            router();
        }
    });
    router();
})

window.addEventListener("popstate", () => {
    router();
});


