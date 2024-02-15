export class Point {
    constructor(x,y) {
        // 초기값이 인자로 들어오면, 그대로 x,y좌표 설정 | default value는 둘 다 0으로 설정
        this.x = x || 0;
        this.y = y || 0;
    }

    add(point) {
        this.x += point.x;
        this.y += point.y;
    }

    substract(point) {
        this.x -= point.x;
        this.y -= point.y;
    }

    reduce(point) {
        this.x *= point.x;
        this.y *= point.y;
    }

    collide(point, width, height) {
        if (this.x >= point.x &&
            this.x <= point.x + width &&
            this.y >= point.y &&
            this.y <= point.y + height) {
                return true;
            }   else {
                return false;
            }
    }

    clone() {
        return new Point(this.x, this.y);
    }
}