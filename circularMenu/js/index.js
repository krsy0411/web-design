const btnToggle = document.querySelector(".btn-menu");
const menu = document.querySelectorAll(".container-menu a");

// 클릭 이벤트
btnToggle.addEventListener("click", () => {
  // 만약 active라는 클래스명이 없으면
  if (!btnToggle.classList.contains("active")) {
    // active라는 클래스 네임을 주고
    btnToggle.classList.add("active");
    // 움직인다
    menu[0].style.transform = "translate(2.8em,0)";
    menu[1].style.transform = "translate(2em,2em)";
    menu[2].style.transform = "translate(0,3em)";
    menu[3].style.transform = "translate(-2em,2em)";
    menu[4].style.transform = "translate(-2.8em,0)";
    menu[5].style.transform = "translate(-2em,-2em)";
    menu[6].style.transform = "translate(0,-3em)";
    menu[7].style.transform = "translate(2em,-2em)";
  } else {
    // 만약 active라는 클래스명이 존재하면
    menu.forEach((item) => {
      // 다시 원상태로 만든다
      item.style.transform = "translate(0,0)";
    });
    // 다시 클래스 네임을 제거
    btnToggle.classList.remove("active");
  }
});
