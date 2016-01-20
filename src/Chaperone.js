var Chaperone = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('chaperone');
};

Chaperone.prototype = Object.create(Dancer.prototype);

Chaperone.prototype.constructor = Chaperone;

Chaperone.prototype.step = function() {
  var breakUp = function(closest) {
    if (closest[0] < 125) {
      closest[1][0].timeBetweenSteps = 1000;
      closest[1][1].timeBetweenSteps = 1000;
      closest[1][0].$node.show();
      closest[1][1].$node.show();
      window.couples.splice(closest[2],1);
      closest[1][0].$node.removeClass('coupled');
      closest[1][1].$node.removeClass('coupled');
      closest[1].forEach(function(element){
        element.chooseImage();
        if(element instanceof Nerd){
          element.setPosition($("body").height() * (1 - 0.5 * Math.random()) - 150,
          $("body").width() * Math.random());
          element.$node.addClass('nerd');
        }
        else if(element instanceof CoolGuy){
          element.$node.addClass('coolguy');
          if(closest[1][1] instanceof Girl || closest[1][0] instanceof Girl){
            element.setPosition($("body").height() * (1 - 0.5 * Math.random()) - 150,
            $("body").width() * Math.random());
          }
          element.foundNerd = false;
        }
        else if(element instanceof Girl){
          element.$node.addClass('girl');
        }
        element.$node.css('transition', '.5s');
      });
    }
    else if(closest[0] < 10000){
      var xDisplacement = closest[1][0].$node.position().left - this.$node.position().left;
      var yDisplacement = closest[1][0].$node.position().top - this.$node.position().top - 100;
      var height = this.$node.position().top + 50 * (yDisplacement/closest[0]);
      var width = this.$node.position().left + 50 * (xDisplacement/closest[0]);
      this.setPosition(height, width);
    }
  };
  this.interact(breakUp);
  Dancer.prototype.step.call(this);
};

Chaperone.prototype.imageBank = [
  'media/chaperones/tumblr_n0s0q1Z0Bk1tsxwhto1_400.gif'
  
];

Chaperone.prototype.interact = function(action) {
  var currentLocation = this.$node.position();
  var closest = [10000];
  for (var i = 0; i < window.couples.length; i++) {
    var distance = compareLocations(currentLocation, window.couples[i][0].$node.position());
    if (distance < closest[0]) {
      closest[1] = window.couples[i];
      closest[0] = distance;
      closest[2] = i;
    }
  }
  action.call(this, closest);
};