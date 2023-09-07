const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
// li개수 -1(data-index가 0부터 시작)
const len = panel_li.length - 1;
let enableClick = true;

btnUp.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    moveUp();
  }
});

btnDown.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    moveDown();
  }
});

// 다음 li 태그로 넘어가는 함수
// 화면을 위로 넘기면 li태그는 밑으로 내린다
function moveUp() {
  // on이라는 클래스 네임은 현재 랜더링된 li태그를 의미
  let current_item = panel.querySelector(".on");
  let current_index = parseInt(current_item.getAttribute("data-index"));
  // 우선 다음 인덱스 값은 안 줌
  let next_index = null;

  // 현재 인덱스가 길이가 아닌 경우엔 다음 인덱스를 +1, 길이와 같으면 마지막 인덱스이므로 0으로
  current_index !== len ? (next_index = current_index + 1) : (next_index = 0);
  // 클래스 이름에서 on을 지우고 up이라는 클래스 네임 생성
  current_item.classList.remove("on");
  current_item.classList.add("up");
  // 다음 인덱스의 li의 클래스 네임에 down 생성
  panel_li[next_index].classList.add("down");
  // 0.5초 이후에 콜백함수 실행
  setTimeout(() => {
    panel_li[next_index].classList.remove("down");
    panel_li[next_index].classList.add("on");
    panel.querySelector(".up").classList.remove("up");
    enableClick = true;
  }, 500);
}

// 이전 li태그로 돌아가는 함수
// 배경을 아래로 넘기면서 li태그 위에꺼를 띄운다.
function moveDown() {
  let current_item = panel.querySelector(".on");
  let current_index = parseInt(current_item.getAttribute("data-index"));
  // 우선 이전 인덱스 값은 안 줌
  let prev_index = null;

  // 현재 인덱스가 0이 아니면, 이전 인덱스는 -1, 0이면 len값만큼 부여
  current_index !== 0 ? (prev_index = current_index - 1) : (prev_index = len);
  // 클래스 이름에서 on을 지우고 up이라는 클래스 네임 생성
  current_item.classList.remove("on");
  current_item.classList.add("down");
  // 이전 인덱스의 li의 클래스 네임에 up 생성
  panel_li[prev_index].classList.add("up");
  // 0.8초 이후에 콜백함수 실행
  setTimeout(() => {
    panel_li[prev_index].classList.remove("up");
    panel_li[prev_index].classList.add("on");
    panel.querySelector(".down").classList.remove("down");
    enableClick = true;
  }, 800);
}
