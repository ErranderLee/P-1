export default async function secretboard(username) {
    document.title = "비밀 게시판";

    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<a id=post href="/post">등록하기</a>`;

    const postsData = await fetch(`/post?board=${document.title}`)
    .then((res) => res.json());
    const posts = postsData.posts;
    let postsHTML = `<ul>`
    for (const post of posts) {
        postsHTML += `<li>
        <span id=createAt>${post.createdAt}</span>
        <span id=content>${post.content}</span>
        <span id=author>${post.author}</span>
        </li>`
    }
    postsHTML += `<ul>`
    under.innerHTML += postsHTML;

    const prevunder = document.querySelector("#under");

    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);
}