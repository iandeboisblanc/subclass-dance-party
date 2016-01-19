// Creates and returns a new dancer object that can step
var Dancer = function(bottom, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(bottom, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(bottom, left) {
  var styleSettings = {
    bottom: bottom,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(position) {
  this.$node.css('left', position);
  this.$node.css('bottom', '50%');
};


