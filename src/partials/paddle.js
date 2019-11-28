import { SVG_NS } from '../settings';
export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 15;
        this.score = 0;

        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:

                    this.up();

                    break;

                case down:

                    this.down();
                    break;
            }
        });

    }
    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }
    //...
    up() {
        // get the max number...
        // either 0 or the y position minus speed
        this.y = Math.max(0, this.y - this.speed);
    }
    down() {
        // get the min number...
        // either the height of the board minus the height of the paddle
        // or the y position plus the speed
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    }
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x); // x of the top left corner
        rect.setAttributeNS(null, 'y', this.y); // y of the top left corner
        svg.appendChild(rect);
    }

}