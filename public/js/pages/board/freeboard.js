import load from "./utils/load.js";


export default function freeboard(username) {
    document.title = "자유 게시판";

    load(document.title);
}

// prevunder가 있을 때만 prevunder의 innerHTML을 바꿔주고
// 없으면 새로 생성하는 방식. 생각해보기