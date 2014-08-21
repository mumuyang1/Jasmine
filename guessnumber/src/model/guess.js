function Guess(randonNumber,compareNumber){

  this.randomNumber = randonNumber;
  this.compareNumber = compareNumber;
}

Guess.prototype.getTips = function(input){

var answer = this.randomNumber.generateRandomNumber();
var tips = this.compareNumber.compare(input,answer);

  return tips;

}
