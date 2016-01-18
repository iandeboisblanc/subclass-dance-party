var BouncyDancer = function() {
  Dancer.apply(this, arguments);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.$node.css('height',30);
  // this.$node.toggle();
  Dancer.prototype.step.call(this);
};
