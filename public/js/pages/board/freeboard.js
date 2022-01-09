export default async function freeboard(innerHTML) {
    document.title = "자유 게시판";

    const posts = await fetch(`/post?board=${document.title}`);
    const upper = document.querySelector(".upper");
    const under = document.querySelector(".under");

    upper.innerHTML = innerHTML.upperInnerHTML;
    under.innerHTML = innerHTML.underInnerHTML;
}