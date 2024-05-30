const subMenus = document.querySelectorAll(".sub-menu");
const buttons = document.querySelectorAll('.sidebar ul button');

// onClick 함수는, button 태그에서 실행됩니다 : item === button element
const onClick = (item) => {
    // 우선 초기화 : 높이를 0으로 만들고 + active라는 className도 지워주기
    subMenus.forEach(menu => menu.style.height = "0px");
    buttons.forEach(button => button.classList.remove("active"));

    // 자매 element가 없으면 실행 : 버튼의 자매 element는 sub-menu(div) 의미
    if(!item.nextElementSibling) {
        // active라는 클래스 이름을 해당 원소에 추가
        item.classList.add("active");
        return;
    }
    const subMenu = item.nextElementSibling;
    const ul = subMenu.querySelector("ul");
    // console.log(subMenu.clientHeight);

    // subMenu(div)의 현재 높이가 0이면 실행되는 분기
    if(!subMenu.clientHeight) {
        subMenu.style.height = `${ul.clientHeight}px`;
        item.classList.add("active");
    } else {
        // subMenu의 현재 높이가 0이 아닌 경우
        subMenu.style.height = "0px";
        item.classList.remove("active");
    }
}