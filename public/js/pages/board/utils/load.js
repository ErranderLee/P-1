import detailpost from "./detailpost.js";

export default async function load(title) {
    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<a id=post href="/post">등록하기</a>`;

    // 데이터 불러오는 기능과 페이지를 그려주는 기능 분리.
    const postsData = await fetch(`/post?board=${title}`);
    const postsTemp = await postsData.json();
    const posts = postsTemp.posts;
    let postsHTML = document.createElement('ul');
    postsHTML.id = "posts";
    // let id = 0;
    // for (const post of posts) {
    //     const li = document.createElement('li');
    //     li.id = id;
    //     li.innerHTML += `
    //     <span id=createAt>${post.createdAt}</span>
    //     <span id=content>${post.content}</span>
    //     <span id=author>${post.author}</span>`;
    //     postsHTML.appendChild(li);
    //     id++;
    // }   
    postsHTML.insertAdjacentHTML('beforeend',posts.map((post,id)=>
        `<li id=${id}>
        <span id=createAt>${post.createdAt}</span>
        <span id=content>${post.content}</span>
        <span id=author>${post.author}</span>
        </li>`
    ).join(''));
    // 고차함수로 수정하기.
    under.appendChild(postsHTML);

    const prevunder = document.querySelector("#under");

    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);

    const lis = document.querySelectorAll("#posts li");
    lis.forEach((li) => {
        li.addEventListener('click', () => {
            detailpost(under, posts[li.id]);
        })
    })
}
// div 태그를 하나 더 만들어서 치환시키는 방식.
// prevunder가 있을 때만 prevunder의 innerHTML을 바꿔주고
// 없으면 새로 생성하는 방식. 생각해보기