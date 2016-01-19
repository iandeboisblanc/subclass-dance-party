describe("RainbowBlinkyDancer", function() {

  var rainbowBlinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowBlinkyDancer = new RainbowBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(rainbowBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });


  it("should have a step function that makes its node blink", function() {
    sinon.spy(rainbowBlinkyDancer.$node, 'toggle');
    rainbowBlinkyDancer.step();
    expect(rainbowBlinkyDancer.$node.toggle.called).to.be.equal(true);
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(rainbowBlinkyDancer, "step");
      expect(rainbowBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rainbowBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rainbowBlinkyDancer.step.callCount).to.be.equal(2);
    });
    it("should have a unique color", function() {
      var color = rainbowBlinkyDancer.$node.css('background-color');
      clock.tick(timeBetweenSteps);
      expect(color).to.not.equal(rainbowBlinkyDancer.$node.css('background-color'));
    });
  });

});