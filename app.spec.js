describe('Service Calculator', function () {
    beforeEach(module('services')); // inject our services module
    var Calculator;

    beforeEach(inject(function (_Calculator_) {
        Calculator = _Calculator_; // inject our Calculator service
    }));

    // Test
    it('should sum numbers', function () {
        var result = Calculator.sumNumbers(2, 10);
        var expectedResult = 12;
        // asertion
        expect(result).toEqual(expectedResult);
    });

    // Test
    it('should sum numbers', function () {
        var result = Calculator.sumNumbers(2, 10);
        var expectedResult = 12;
        // asertion
        expect(result).toEqual(expectedResult);
    });
});

