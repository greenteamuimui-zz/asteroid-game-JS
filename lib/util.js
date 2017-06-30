
const Util =  {

  inherits (childClass, parentClass) {
  childClass.prototype = Object.create(parentClass.prototype);
  childClass.prototype.constuctor = childClass;
  },

  scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
  },

  randomVec (len) {
  let deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], len);
  },

};

module.exports = Util;
