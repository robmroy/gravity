import Ball from '../ball';
import LaunchPad from '../launchpad';
import StickyPlanet from '../Sticky_planet';
import Obstacle from '../obstacle';
import BouncyPlanet from '../bouncy_planet';
import Hole from '../hole';

class Level1 {
    constructor(game){
        const invSqrt = 1/Math.sqrt(2);
    this.ball = new Ball(game, 100 + (25 + 5)*invSqrt, 40 + (25 + 5)*invSqrt);
        this.currentPlanet = new StickyPlanet(game, 100, 40, 25, "#27753a", 1);

        this.launchPad = new LaunchPad(game, this.ball.x, this.ball.y, [invSqrt, invSqrt]);
        this.planets = [
            this.currentPlanet,
            // new StickyPlanet(game, 300, 400, 35), 
            new StickyPlanet(game, 670, 490, 25, "orange", 3),
            
        ]
        this.hole = new Hole(game, 670, 450);
        this.obstacles=[];
        this.obstacles = [
            // new Obstacle(game, 90, 0, 90, 900)   ,
            new Obstacle(game, 350, 260, 665, 420),
            new Obstacle(game, 360, 220, 790, 470)

        ]
        }
}

export default Level1;