// id가 checkbox인 html tag를 찾기
const checkbox = document.getElementById("checkbox");
// checkbox tag에 change라는 이벤트(input에서 값에 변화가 생길 시 발생하는 이벤트 추가
// 텍스트를 입력받는 인풋이면 -> 글자 하나 입력할때마다 change event 발생하는겁니다) 
checkbox.addEventListener("change", function() {
    // body태그의 class이름에 "dark-mode"를 토글(넣었다가 뺐다 설정)
    document.body.classList.toggle("dark-mode");
})