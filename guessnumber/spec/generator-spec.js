describe('randon number', function () {


    beforeEach(function () {

    });


    it('if is a number',function(){

      var randomNumber = new RandomNumber();
      var value = randomNumber.generateRandomNumber();
      var result = true;

      for(var i = 0; i < value.length; i++){
        if(isNaN(value[i])){
          result = false;
         }
       }

     expect(result).toBe(true);

    });

    it('if length is 4 ',function(){

    var randomNumber = new RandomNumber();
    var length = true;
    if(randomNumber.length == 4){
      length = false;
    }
    expect(length).toBe(true);

    });

    it('if it is repeated ',function(){

      var randomNumber = new RandomNumber().generateRandomNumber();
      var result = true;

      for(var i = 0; i < randomNumber.length; i++){

        for(var j = i + 1; j < randomNumber.length; j++){
          if(randomNumber[i] == randomNumber[j]){
            result = false;
          }
        }
      }
      expect(result).toBe(true);

    });

    it('if it is random ',function(){

    var randomNumber1 = new RandomNumber();
    var randomNumber2 = new RandomNumber();
    var result = true;

    for(var i = 0; i < randomNumber1.length; i++){

      if(randomNumber1[i] === randomNumber2[i]){
        result = false;
      }
    }
    expect(result).toBe(true);

    });
});
