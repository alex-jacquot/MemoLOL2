describe('Service Memo', function () {
    beforeEach(module('services')); // inject our services module
    var memo;

    beforeEach(inject(function (_Memo_) {
        Memo = _Memo_; // inject our Calculator service
    }));

    // Test
    it('generate a card', function () {
        var result = Memo.generateCard("Aatrox", 1).trim().replace(/ /g,'');
        var expectedResult = '<div class="col-lg-3 col-md-4 col-xs-6 card"><figure class="thumbnail" href="#"><img class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg" alt=""><div class="champName">Aatrox</div></figure></div>"';
        // asertion
        expect(result).toEqual(expectedResult);
    });
});

