var RainbowBlinkyDancer = function() {
  BlinkyDancer.apply(this, arguments);
};

RainbowBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);

RainbowBlinkyDancer.prototype.constructor = RainbowBlinkyDancer;

RainbowBlinkyDancer.prototype.step = function() {
  var color = Math.floor(Math.random()*16777215).toString(16);
  this.$node.css('background-color', '#'+color);
  BlinkyDancer.prototype.step.call(this);
};
