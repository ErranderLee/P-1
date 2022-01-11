import detailpost from "./detailpost.js";
import queryStringParser from "./querystringparser.js";
import page from "./page.js";
import modifypost from "./modifypost.js";

export default async function load(title) {
    const params = queryStringParser(location.search);
    const numPostsPerPage = 5;
    
    // 데이터 불러오는 기능과 페이지를 그려주는 기능 분리.
    const postsData = await fetch(`/post?board=${title}`);
    const postsTemp = await postsData.json();
    const posts = postsTemp.posts;
    
    if (Object.keys(params).length === 1) {
        const pageNum = params.page;
        page(pageNum, posts, numPostsPerPage);
    } else if (Object.keys(params).length === 2) {
        const post = posts[params.postid];
        detailpost(post);
    } else if (Object.keys(params).length === 3) {
        const mode = params.mode;
        const post = posts[params.postid];
        if (mode === 'm') { modifypost(post); }
    } else {
        history.pushState(null, null, `${location.pathname}?page=1`);
        window.dispatchEvent(new Event('locationchange'));
    }
}
// div 태그를 하나 더 만들어서 치환시키는 방식.

// prevunder가 있을 때만 prevunder의 innerHTML을 바꿔주고
// 없으면 새로 생성하는 방식. 생각해보기