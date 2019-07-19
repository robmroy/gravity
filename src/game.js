import Ball from './ball';
import Obstacles from './obstacles';
import Planets from './planets';

class Game {

    constructor(level) {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext("2d");

        this.ball = new Ball(this, 50, 50);
        this.ball.vx = 1;
        this.draw = this.draw.bind(this);
        // this.planets = new Planets(level);
        // this.launchpad = new LaunchPad(level);
        // this.obstacles = new Obstacles(level);
    }
    start() {
        // this.bindKeyHandlers();
        // this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }
    step(delta) {
        this.moveObjects(delta);
    }

    moveObjects() {
        this.ball.move();
    }
    animate(time) {
        const timeDelta = time - this.lastTime;
        this.step(timeDelta);
        this.draw();
        this.lastTime = time;

        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    }
    draw() {
        let ctx=this.ctx;
        ctx.width = 1200;
        ctx.height = 600;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        this.ball.draw(this.ctx);
    }

}

export default Game;