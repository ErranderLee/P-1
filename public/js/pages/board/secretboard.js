import load from "./utils/load.js";

export default async function secretboard(username) {
    document.title = "비밀게시판";

    load(document.title);
}