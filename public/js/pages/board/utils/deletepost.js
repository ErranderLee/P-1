export default function deletepost(post) {
    const confirm = window.confirm("삭제하시겠습니까?");
    if(!confirm) return;   
    fetch(`/post?postid=${post.postid}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then((result) => {
        if (result.success) {
            history.pushState(null, null, '/');
            window.dispatchEvent(new Event('locationchange'));
        }
    // then 말고 await 사용해서 나눠보기(가독성), 모듈화 시켜서 불러오는 식으로 하기.
    }) 
}
// 다시만들기, confirm 지양, toast