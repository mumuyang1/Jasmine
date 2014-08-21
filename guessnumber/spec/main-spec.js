describe('guessNumber', function () {

    var answer;
    var inputs;

    beforeEach(function () {
      answer = [1,2,3,4];
      inputs = [1,2,3,4];
    });


    it('input the right answer',function(){

    var compareNumber = new CompareNumber();
    var tips = compareNumber.compare(answer,inputs);

    expect(tips).toBe('4A0B');

    });

});
