export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;

        // 생성할때, x,y 좌표값을 랜덤하게 설정
        // Math.random() : 0~1(1은 미포함) 구간에서 부동소수점의 난수를 생성
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    // 공 그려내는 메서드
    draw(ctx, stageWidth, stageHeight, block) {
        this.x += this.vx;
        this.y += this.vy;

        // 충돌 구역 계산해서 vx,vy,x,y 값 변경
        this.bounceWindow(stageWidth, stageHeight);
        this.bounceBlock(block);

        ctx.fillStyle = "#fdd700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    // 브라우저나 물체에 부딪혀 공이 바운스될때 실행되는 메서드
    bounceWindow(stageWidth, stageHeight) {
        // 스테이지의 x,y 최대/최소 범위 설정
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        // 브라우저 범위를 나가면 튕기도록
        if(this.x <= minX || this.x >= maxX) {
            // 가던 x축 방향의 반대 방향
            this.vx *= -1;
            this.x += this.vx;
        } else if(this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    // 벽(블락)에 부딪혔을때 실행되는 메서드
    bounceBlock(block) {
        // 공이 벽에 부딪힐때의 최대최소 x,y좌표값 변수들
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        // 만약 벽 범위 내에 존재할 경우
        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            console.log("블락 진입");
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);

            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            // 가장 인접한 값을 구합니다.
            const min = Math.min(min1, min2);

            // 만약 x좌표값이 가장 인접한 경우에는 : x축 방향 진행방향 뒤집기
            if(min == min1) {
                this.vx *= -1;
                this.x += this.vx;
            } else if(min == min2) {
                // 만약 y좌표값이 가장 인접한 경우에는 : y축 방향 진행방향 뒤집기
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }
}