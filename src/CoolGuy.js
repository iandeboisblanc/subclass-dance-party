var CoolGuy = function() {
  Dancer.apply(this, arguments);
  this.$node.addClass('coolguy');
};

CoolGuy.prototype = Object.create(Dancer.prototype);

CoolGuy.prototype.constructor = CoolGuy;

CoolGuy.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

CoolGuy.prototype.imageBank = [
  'media/coolguys/tumblr_nlkxom50sK1swl13ro1_540.gif',
  'media/coolguys/tumblr_nmne8l53mn1u5ka03o1_500.gif',
  'media/coolguys/tumblr_nw5ai4I7GM1s8byveo2_500.gif'
];
