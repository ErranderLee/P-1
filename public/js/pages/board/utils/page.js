
export default function page(pageNum, posts, numPostsPerPage, title) {
    const totalPageNum = Math.ceil(posts.length / numPostsPerPage);
    const postsToDisplay = posts.slice((pageNum - 1) * numPostsPerPage, (pageNum * numPostsPerPage));
    
    const under = document.createElement("div");
    under.classList.add("under");
    under.innerHTML = `
    <span class=board>${title}</span>
    <a class=post href="/register">등록하기</a>`;

    let postsHTML = document.createElement('ul');
    postsHTML.classList.add("posts");

    postsHTML.insertAdjacentHTML('beforeend', postsToDisplay.map((post,id)=>
        `<li id=${id + (pageNum - 1) * numPostsPerPage}>
        <span id=createAt>${post.createdAt.slice(5,10).replace('-', '/')}</span>
        <span id=content>${post.content}</span>
        <span id=author>${post.author}</span>
        </li>`
    ).join(''));
    under.appendChild(postsHTML);

    let pageList = document.createElement('ul');
    pageList.classList.add("pagelist");
    pageList.insertAdjacentHTML('beforeend', Array(totalPageNum).fill().map((element, index)=>
        `<li id="${index+1}" class="pagebutton">${index+1}</li>`).join(''));
    under.appendChild(pageList);
    
    const prevunder = document.querySelector(".under");

    if(prevunder) {
        document.body.removeChild(prevunder);
    }
    document.body.appendChild(under);

    const postslis = document.querySelectorAll(".posts li");
    postslis.forEach((li) => {
        li.addEventListener('click', () => {
            history.pushState(null, null, `${location.pathname}?page=1&postid=${li.id}`);
            window.dispatchEvent(new Event('locationchange'));
        })
    })

    const pagelis = document.querySelectorAll(".pagelist li");
    pagelis.forEach((li) => {
        console.log(li);
        li.addEventListener('click', () => {
            history.pushState(null, null, `${location.pathname}?page=${li.id}`);
            window.dispatchEvent(new Event('locationchange'));  
        });
    });
}