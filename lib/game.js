const Asteroid = require("./asteroid");


function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 100;
  this.asteroids = []
}

Game.prototype.addAsteroids() {


  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let pos_x = Math.random() * this.DIM_X;
    let pos_y = Math.random() * this.DIM_Y;
    this.asteroids.push(new Asteroid([pos_x, pos_y]))
  }

}
