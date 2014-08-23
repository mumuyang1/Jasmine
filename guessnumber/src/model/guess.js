function Guess(randonNumber,compareNumber){

  this.randomNumber = randonNumber;
  this.compareNumber = compareNumber;
  this.answer = this.randomNumber.generateRandomNumber();
}

Guess.prototype.getTips = function(input){

  var tips = this.compareNumber.compare(this.answer,input);
  return tips;

}
