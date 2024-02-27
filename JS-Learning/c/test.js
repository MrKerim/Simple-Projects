describe("pow", function() {

  before(() => console.log("Testing started – before all tests"));
  after(() => console.log("Testing finished – after all tests"));

  beforeEach(() => console.log("Before a test – enter a test"));
  afterEach(() => console.log("After a test – exit a test"));

  describe("Nan Test", function() {
  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});