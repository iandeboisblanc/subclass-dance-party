var BouncyDancer = function() {
  Dancer.apply(this, arguments);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.$node.addClass('bouncyDancer');
  this.$node.css('animation-duration', (this.timeBetweenSteps/1000) + 's');
};
