import { Point } from "./point.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        // 브라우저 렌더링 크기와 유저 디스플레이 픽셀 수 사이 비율이 1이상이면(고해상도 디스플레이의 경우) -> 2로, 그게 아니라면 1
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.mousePos = new Point();
        this.curItem = null;

        // 3번째 인자(boolean)은 false를 주면 이벤트 '버블링' / true면 이벤트 '캡쳐링'
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        document.addEventListener("pointerdown", this.onDown.bind(this), false);
        document.addEventListener("pointermove", this.onMove.bind(this), false);
        document.addEventListener("pointerup", this.onUp.bind(this), false);
    }

    resize() {
        // 각 유저의 body태그 사이즈를 계산(width, height)
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // 각 유저의 해상도에 최대한 알맞은 픽셀비율 설정
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        // 캔버스 컨텍스트의 스케일 조절
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        // 재실행될때 이전까지의 캔버스 내용들은 날리도록(자취 제거)
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
    }
}