describe('guess', function () {

    var answer;
    var inputs;

    beforeEach(function () {

       inputs = [1,2,3,4];
       answer = new RandomNumber();
       spyOn(answer, 'generateRandomNumber').and.returnValue([3,5,7,4]);

    });

    it('if win the game',function(){

      var currentAnswer = answer.generateRandomNumber();
      var compareNumber = new CompareNumber()
      var correctTips = compareNumber.compare(inputs,currentAnswer);

      var tips = new Guess(answer, compareNumber);
      var result  = tips.getTips(inputs);

      expect(result).toBe(correctTips);

    });

});
// 
//
// describe('guess', function () {
//
//     var answer;
//     var inputs;
//
//     beforeEach(function () {
//
//        inputs = [1,2,3,4];
//        answer = new RandomNumber();
//        spyOn(answer, 'generateRandomNumber').and.returnValue(answer);
//        var compareNumber = new CompareNumber();
//        spyOn(compareNumber, 'compare');
//     });
//
//     it('if win the game',function(){
//
//       // var currentAnswer = answer.generateRandomNumber();
//       // var compareNumber = new CompareNumber();
//       var correctTips = compareNumber.compare(inputs, answer);
//
//       var tips = new Guess(answer, compareNumber);
//       var result  = tips.getTips(inputs);
//
//       expect(result).toBe(correctTips);
//       expect(compareNumber.compare).toHaveBeenCalledWith(inputs, answer);
//
//     });
//
// });
