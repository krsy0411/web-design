import { Point } from "./point.js";

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const SPEED_REDUCE = 0.8;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const WIDTH = 260;
const HEIGHT = 260;

export class Dialog {
    constructor() {
        this.pos = new Point();
        this.target = new Point();
        this.prevPos = new Point();
        this.downPos = new Point();
        this.speedPos = new Point();
        this.startPos = new Point();
        this.mousePos = new Point();
        this.centerPos = new Point();
        this.origin = new Point();
        this.rotation = new Point();
        this.sideValue = new Point();
        this.isDown = false;
    }

    resize(stageWidth, stageHeight) {
        // x,y 좌표를 스테이지 범위 내에서 자신의 사이즈만큼 뺀 공간 중 무작위로 설정
        this.pos.x = Math.random() * (stageWidth - WIDTH);
        this.pos.y = Math.random() * (stageHeight - HEIGHT);

        // 타겟과 이전 위치를 생성(clone)
        this.target = this.pos.clone();
        this.prevPos = this.pos.clone();
    }

    animate(ctx) {
        const move = this.target.clone().substract(this.pos).reduce(SPEED_REDUCE);
        this.pos.add(move);

        ctx.beginPath();
        ctx.fillStyle = "#f4e55a";
        ctx.fillRect(this.pos.x, this.pos.y, WIDTH, HEIGHT);
    }

    down(point) {
        // 점이 충돌(물체 내부)인 경우
        if(point.collide(this.pos, WIDTH, HEIGHT)) {
            this.isDown = true;
            this.startPos = this.pos.clone();
            this.downPos = point.clone();
            this.mousePos = point.clone().substract(this.pos);

            return this;
        } else {
            null;
        }
    }

    move(point) {
        if(this.isDown) {
            this.target = this.startPos.clone().add(point).substract(this.downPos);
        }
    }

    up() {
        this.isDown = false;
    }
}