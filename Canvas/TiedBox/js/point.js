export class Point {
    // 초기값이 인자로 들어오면, 그대로 x,y좌표 설정 | default value는 둘 다 0으로 설정
    constructor(x,y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    add(point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }

    substract(point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }

    reduce(value) {
        this.x *= value;
        this.y *= value;

        return this;
    }

    collide(point, width, height) {
        // 충돌영역 내부이면 true반환
        if (this.x >= point.x &&
            this.x <= point.x + width &&
            this.y >= point.y &&
            this.y <= point.y + height) {
                return true;
            }   else {
                // 충돌영역 외부면 false반환
                return false;
            }
    }

    // 점 복제 : 반환
    clone() {
        return new Point(this.x, this.y);
    }
}