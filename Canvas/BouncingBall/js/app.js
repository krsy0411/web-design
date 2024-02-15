import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 7);
        this.block = new Block(700, 30, 300, 450);

        // 초기 실행될 때 | 브라우저에게 애니메이션을 수행할 적절한 시기에 함수를 호출하도록 요청하는 데 사용
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);
    }

    animate(t) {
        // 초기 실행 이후, 한 번 실행된 이후부터 계속 실행 | 브라우저에게 애니메이션을 수행할 적절한 시기에 함수를 호출하도록 요청하는 데 사용
        window.requestAnimationFrame(this.animate.bind(this));

        // 이전에 생성했던 애니메이션은 clear |  지우기를 시작할 사각형의 왼쪽 상단 모서리의 x 좌표,  지우기를 시작할 사각형의 왼쪽 상단 모서리의 y 좌표, 지울 영역의 너비, 지울 영역의 높이
        // 즉, 전체 영역을 한 번 클리어해주는 메서드
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }
}

window.onload = () => {
    new App();
}