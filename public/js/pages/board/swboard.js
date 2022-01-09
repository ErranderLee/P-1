export default async function infoboard(username) {
    document.title = "SW 게시판";

    const posts = await fetch(`/post?board=${document.title}`);
}