var CoolGuy = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('coolguy');
  this.foundNerd = false;
};

CoolGuy.prototype = Object.create(Dancer.prototype);

CoolGuy.prototype.constructor = CoolGuy;

CoolGuy.prototype.step = function() {
  var beatUpNerd = function(closest) {
    if (closest.nerd[0] < 75 && this.foundNerd === false) {
      this.$node.css('transition','all 0s');
      this.$node.css('z-index',10);
      closest.nerd[1].$node.toggle();
      this.$node.css('background-image', 'url(media/giphy.gif)');
      this.foundNerd = true;
    }
    else if(closest.nerd[0] < 10000){
      if(this.foundNerd === false){
        var xDisplacement = closest.nerd[1].$node.position().left - this.$node.position().left;
        var yDisplacement = closest.nerd[1].$node.position().top - this.$node.position().top;
        var height = this.$node.position().top + 100 * (yDisplacement/closest.nerd[0]);
        var width = this.$node.position().left + 100 * (xDisplacement/closest.nerd[0]);
        this.setPosition(height, width);
      }
    }
  };
  this.interact(beatUpNerd);
  Dancer.prototype.step.call(this);
};

CoolGuy.prototype.imageBank = [
  'media/coolguys/tumblr_nlkxom50sK1swl13ro1_540.gif',
  'media/coolguys/tumblr_nmne8l53mn1u5ka03o1_500.gif',
  'media/coolguys/tumblr_nw5ai4I7GM1s8byveo2_500.gif'
];
