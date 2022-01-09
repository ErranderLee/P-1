export default async function infoboard(username) {
    document.title = "정보 게시판";

    const posts = await fetch(`/post?board=${document.title}`);
}