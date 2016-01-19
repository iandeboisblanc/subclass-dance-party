var Nerd = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('nerd');
};

Nerd.prototype = Object.create(Dancer.prototype);

Nerd.prototype.constructor = Nerd;

Nerd.prototype.step = function() {
  this.interact(function(closest) {
    if (closest.dist < 100 && closest.dancer.hasClass('girl')) {
      this.setPosition(0, 0);
    }
    else {
      this.setPosition($("body").height() * Math.random() * 0.5,
      $("body").width() * Math.random());
    }
  });
  Dancer.prototype.step.call(this);
};

Nerd.prototype.imageBank = [
  'media/nerds/tumblr_nlqrmydFVE1u6w1edo1_250.gif',
  'media/nerds/tumblr_nnsvz0u4uk1slsekho1_250.gif',
  'media/nerds/tumblr_nvpbq466RU1scncwdo1_540.gif',
  'media/nerds/tumblr_nzlh474yRf1u6w1edo2_400.gif'
];

Nerd.prototype.interact = function() {


  Dancer.prototype.interact.call(this);
}