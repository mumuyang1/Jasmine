function RandomNumber(){

}

RandomNumber.prototype.generateRandomNumber = function(){

  var randomNumber = [];

  for(var i = 0; i < 4; i++){

    var number = parseInt(Math.random()*10);
    
    while(randomNumber.indexOf(number) != -1){
      number = parseInt(Math.random()*10);
      }

      randomNumber.push(number);
    }

  return randomNumber;

}
