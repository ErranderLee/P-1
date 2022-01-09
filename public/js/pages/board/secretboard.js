export default async function infoboard(username) {
    document.title = "비밀 게시판";

    const posts = await fetch(`/post?board=${document.title}`);
}