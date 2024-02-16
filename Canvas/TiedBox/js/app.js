import { Point } from "./point.js";
import { Dialog } from "./dialog.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        // 브라우저 렌더링 크기와 유저 디스플레이 픽셀 수 사이 비율이 1이상이면(고해상도 디스플레이의 경우) -> 2로, 그게 아니라면 1
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.mousePos = new Point();
        this.curItem = null;

        // dialog들 담아두는 공간
        this.items = [];
        // dialog의 총 개수
        this.total = 1;
        for(let i=0; i<this.total; i++) {
            this.items[i] = new Dialog();
        }

        // 3번째 인자(boolean)은 false를 주면 이벤트 '버블링' / true면 이벤트 '캡쳐링'
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        // html문서 전체에 포인터 이벤트 추가
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

        // 캔버스 컨텍스트들의 그림자 처리
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 3;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = `rgba(0,0,0,0.1)`;

        // 선 두께 설정
        this.ctx.lineWidth = 2; 

        // diaglog(itme)들 resize
        for(let i=0; i < this.items.length; i++) {
            this.items[i].resize(this.stageWidth, this.stageHeight);
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        // 재실행될때 이전까지의 캔버스 내용들은 날리도록(자취 제거)
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        for(let i=0; i<this.items.length; i++) {
            this.items[i].animate(this.ctx);
        }
    }   

    onDown(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;

        for(let i=this.items.length-1; i>=0; i--) {
            const item = this.items[i].down(this.mousePos.clone());

            if(item) {
                this.curItem = item;
                
                const index = this.items.indexOf(item);
                this.items.push(this.items.splice(index,1)[0]);
                break;
            }
        }
    }

    onMove(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;

        for(let i=0; i<this.items.length; i++) {
            this.items[i].move(this.mousePos.clone());
        }
    }

    onUp(e) {
        for(let i=0; i<this.items.length; i++) {
            this.items[i].up();
        }
    }
}

// 브라우저에 로드되면 App class실행
window.onload = () => {
    new App();
}