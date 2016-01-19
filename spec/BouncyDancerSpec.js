describe("BouncyDancer", function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node bounce", function() {
    bouncyDancer.step();
    expect(bouncyDancer.$node.hasClass('bouncyDancer')).to.be.true;
  });


});
