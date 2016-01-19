var Nerd = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('nerd');
};

Nerd.prototype = Object.create(Dancer.prototype);

Nerd.prototype.constructor = Nerd;

Nerd.prototype.step = function() {
  var runFromGirl = function(closest) {
    if (closest.girl[0] < 200 && closest.girl[1].wantsToDance === false) {
      this.setPosition($("body").height() * (1 - 0.5 * Math.random()) - 150,
      $("body").width() * Math.random());
    }

  };
  this.interact(runFromGirl);
  Dancer.prototype.step.call(this);
};

Nerd.prototype.imageBank = [
  'media/nerds/tumblr_nlqrmydFVE1u6w1edo1_250.gif',
  'media/nerds/tumblr_nvpbq466RU1scncwdo1_540.gif',
  'media/nerds/tumblr_nzlh474yRf1u6w1edo2_400.gif'
];