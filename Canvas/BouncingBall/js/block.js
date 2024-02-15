export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;

        // 벽 그리기
        ctx.fillStyle = "#ff384e";
        ctx.beginPath();
        // 벽의 좌표를 알려줘서 그리기
        ctx.rect(this.x, this.y, this.width, this.height);
        // 벽 색상 채우기
        ctx.fill();

        // 그림자 그리기
        ctx.fillStyle = "#190f3a";
        ctx.beginPath();
        // 주의사항 | 도형의 선이 그려지는 순서가 꼬이면 안됨. 항상 인접한 변의 꼭짓점 좌표를 연속으로 표현할 것
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        // 그림자 색상 채우기
        ctx.fill();

        // 벽 사이드 그리기
        ctx.fillStyle = "#9d0910";
        ctx.beginPath();
        // 주의사항 | 도형의 선이 그려지는 순서가 꼬이면 안됨. 항상 인접한 변의 꼭짓점 좌표를 연속으로 표현할 것
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        // 벽 사이드 색상 채우기
        ctx.fill();
    }
}