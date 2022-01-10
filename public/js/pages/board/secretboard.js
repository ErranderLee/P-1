import load from "./utils/load.js";

export default async function secretboard(username) {
    document.title = "비밀 게시판";

    load(document.title);
}