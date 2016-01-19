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
  this.$node.css('bottom', '20%');
};

Dancer.prototype.chooseImage = function() {
  var index = Math.floor(Math.random() * this.imageBank.length);
  var image = this.imageBank[index];
  this.$node.css('background-image', 'url(' + image + ')');
};

Dancer.prototype.interact = function(action) {
  var currentLocation = this.$node.position();
  //Loop through list and find nearest person
  var closest = {
    dist: 1000000,
    dancer: undefined
  };

  for (var i = 0; i < window.dancers; i++) {
    var distance = compareLocations(currentLocation, window.dancers[i].position());
    if (distance < closest.dist) {
      closest.dancer = window.dancers[i];
      closest.dist = distance;
    }
  }
  action.call(this, closest);
  //Determine if within threshold for action
    //Perform action
}

var compareLocations = function(loc1, loc2) {
  var height = Math.abs(loc1.top - loc2.top);
  var width = Math.abs(loc1.left - loc2.left);
  var distance = Math.sqrt(height*height+width*width);
  return distance;
}