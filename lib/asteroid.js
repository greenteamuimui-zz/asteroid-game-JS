const Util = require("./util");
const MovingObject = require("./moving_object");

  Util.inherits(Asteroid, MovingObject);

function Asteroid(pos) {

  const defHash = {
    pos: pos,
    COLOR: "blue",
    RADIUS: 3.14,
    vel: Util.randomVec(3.14*2)
  };

  super(defHash);
}

module.exports = Asteroid;
