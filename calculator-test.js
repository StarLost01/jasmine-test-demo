
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: 10000,
    years: 4,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('219.14');
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    amount: 20000,
    years: 10,
    rate: 7.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('237.40')
});

/// etc
