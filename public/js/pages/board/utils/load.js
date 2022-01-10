import detailpost from "./detailpost.js";

export default async function load(title) {
    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<a id=post href="/post">등록하기</a>`;

    const postsData = await fetch(`/post?board=${title}`)
    .then((res) => res.json());
    const posts = postsData.posts;
    let postsHTML = document.createElement('ul');
    postsHTML.id = "posts";
    let id = 0;
    for (const post of posts) {
        const li = document.createElement('li');
        li.id = id;
        li.innerHTML += `
        <span id=createAt>${post.createdAt}</span>
        <span id=content>${post.content}</span>
        <span id=author>${post.author}</span>`;
        postsHTML.appendChild(li);
        id++;
    }
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