export default async function swboard(username) {
    document.title = "SW 게시판";

    const under = document.createElement("div");
    under.id = "under";
    under.innerHTML = `<a id=post href="/post">등록하기</a>`;

    const postsData = await fetch(`/post?board=${document.title}`)
    .then((res) => res.json());
    const posts = postsData.posts;
    let postsHTML = document.createElement('ul');
    for (const post of posts) {
        let id = 0;
        alert(id);
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

    
}