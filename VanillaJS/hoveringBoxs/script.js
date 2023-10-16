const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARE_SIZE = 300;

// 동적으로 네모 박스들 생성
for(let i=0; i<SQUARE_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // 사용자가 마우스를 해당 element 바깥에서 안으로 옮겼을 때 발생
    square.addEventListener('mouseover', () => setColor(square));
    // 사용자가 마우스를 해당 element 안에서 바깥으로 옮겼을 때 발생
    square.addEventListener('mouseout', () => removeColor(square));
    
    container.appendChild(square);
}

function getRandomColor() {
    // math.floor : 소수점 이하 버리기
    // math.random : 0~1(1은 미포함) 구간에서 부동소수점의 난수를 생성
    return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    // 다중 테두리선 생성
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}