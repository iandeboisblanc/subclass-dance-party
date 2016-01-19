var Girl = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('girl');
  this.wantsToDance = false;
};

Girl.prototype = Object.create(Dancer.prototype);

Girl.prototype.constructor = Girl;

Girl.prototype.step = function() {
  var seekPartner = function(closest) {
    var closestPartner = closest.coolGuy;
    if(closest.nerd[0] < closest.coolGuy[0]){
      closestPartner = closest.nerd;
    }
    if (closestPartner[0] < 75) {
      this.$node.css('transition','all 0s');
      closestPartner[1].$node.toggle();
      // closestPartner[1].$node.removeClass('nerd');
      closestPartner[1].$node.addClass('dancing');
      // this.$node.css('background-image', 'url(mcedia/giphy.gif)');
      this.wantsToDance = false;
    }
    else if(closestPartner[0] < 10000){
      var xDisplacement = closestPartner[1].$node.position().left - this.$node.position().left;
      var yDisplacement = closestPartner[1].$node.position().top - this.$node.position().top;
      var height = this.$node.position().top + 100 * (yDisplacement/closestPartner[0]);
      var width = this.$node.position().left + 100 * (xDisplacement/closestPartner[0]);
      this.setPosition(height, width);
    }
  };
  if(this.wantsToDance){
    this.interact(seekPartner);
  }
  Dancer.prototype.step.call(this);
};

Girl.prototype.imageBank = [
  'media/girls/tumblr_no2jlqGYjh1u6w1edo1_400.gif',
  'media/girls/tumblr_nst2n2fHEN1scncwdo1_540.gif',
  'media/girls/tumblr_nt95fxwACe1scncwdo1_540.gif',
  'media/girls/tumblr_nt95q2rmqN1scncwdo1_540.gif',
  'media/girls/tumblr_nvw2aqijeE1u6w1edo1_250.gif'
];