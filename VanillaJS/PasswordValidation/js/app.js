const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    {
        // 모든문자(.)가 최소 8글자 
        regex : /.{8,}/,
        index: 0
    },
    {
        // 0-9까지의 숫자 하나 이상
        regex : /[0-9]/,
        index: 1
    },
    {
        // a-z까지의 소문자 하나 이상
        regex : /[a-z]/,
        index: 2
    },
    {
        // 특수문자 하나 이상(영문자와 숫자 제외 패턴)
        regex : /[^A-Za-z0-9]/,
        index: 3
    },
    {
        // A-Z까지의 대문자 하나 이상
        regex : /[A-Z]/,
        index: 4
    },
]

// keyup : 키를 뗄 때 발생하는 "키보드" 이벤트
passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach((item) => {
        const requirementItem = requirementList[item.index];

        if(item.regex.test(e.target.value)) {
            requirementItem.classList.add('valid');
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // 눈을 눌렀을때, input태그의 타입을 password인지 여부를 확인해서, 맞다면 text로 바꿈 : text type은 input value 내용이 드러납니다
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    // input태그의 타입이 password이면, -slash를 붙여주고, 아니라면 -slash대신 빈 값 넣어주기
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
})