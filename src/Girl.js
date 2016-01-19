var Girl = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('girl');
};

Girl.prototype = Object.create(Dancer.prototype);

Girl.prototype.constructor = Girl;

Girl.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

Girl.prototype.imageBank = [
  'media/girls/tumblr_no2jlqGYjh1u6w1edo1_400.gif',
  'media/girls/tumblr_nst2n2fHEN1scncwdo1_540.gif',
  'media/girls/tumblr_nt95fxwACe1scncwdo1_540.gif',
  'media/girls/tumblr_nt95q2rmqN1scncwdo1_540.gif',
  'media/girls/tumblr_nvw2aqijeE1u6w1edo1_250.gif'
];