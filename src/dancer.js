// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(position) {
  this.$node.removeClass('girl');
  this.$node.removeClass('nerd');
  this.$node.removeClass('coolguy');
  this.$node.css('left', position);
  this.$node.css('top', '70%');
};

Dancer.prototype.chooseImage = function() {
  var index = Math.floor(Math.random() * this.imageBank.length);
  var image = this.imageBank[index];
  this.$node.css('background-image', 'url(' + image + ')');
};

Dancer.prototype.interact = function(action) {
  var currentLocation = this.$node.position();
  //Loop through list and find nearest person
  var closest = {nerd : [10000],
    girl: [10000],
    coolguy:[10000],
  };

  for (var i = 0; i < window.dancers.length; i++) {
    var distance = compareLocations(currentLocation, window.dancers[i].$node.position());
    if (window.dancers[i].$node.hasClass('nerd')) {
      if (distance < closest.nerd[0]) {
        closest.nerd[1] = window.dancers[i];
        closest.nerd[0] = distance;
      }
    }
    else if (window.dancers[i].$node.hasClass('girl')) {
      if (distance < closest.girl[0]) {
        closest.girl[1] = window.dancers[i];
        closest.girl[0] = distance;
      }
    }
    else if (window.dancers[i].$node.hasClass('coolguy')) {
      if (distance < closest.coolguy[0]) {
        closest.coolguy[1] = window.dancers[i];
        closest.coolguy[0] = distance;
      }
    }
  }
  action.call(this, closest);
  //Determine if within threshold for action
    //Perform action
};

Dancer.prototype.conga = function(index) {
  if(index === 0){
    var mouseFollow = function(e){
      this.$node.css({left:e.pageX - 100, top:e.pageY - 100});
    };
  }
  else{
    var leader = window.dancers[index - 1];
    var mouseFollow = function(){
      this.$node.css({left:leader.$node.position().left, top:leader.$node.position().top});
    };
  }
  $(document).mousemove(mouseFollow.bind(this));
};

var compareLocations = function(loc1, loc2) {
  var height = Math.abs(loc1.top - loc2.top);
  var width = Math.abs(loc1.left - loc2.left);
  var distance = Math.sqrt(height*height+width*width);
  return distance;
};