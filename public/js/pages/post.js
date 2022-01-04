export default function post() {
    document.title = "글 등록";

    const under = document.querySelector("#under");

    under.innerHTML = `<form>
    <input type="text" placeholder="게시판을 선택해 주세요" required />
    <input type="text" placeholder="제목을 입력해 주세요" required />
    <input type="text" placeholder="내용" required />
    <input type="submit" value="글쓰기" />  
    </form>`;
}