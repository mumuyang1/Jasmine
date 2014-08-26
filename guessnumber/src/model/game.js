function Game(guess){

  this.guess = guess;
  this.chance = 6;

}

Game.prototype.start = function(){

    return this.guess.answer;

};

Game.prototype.judgeInput = function(inputs){

  if(inputs.length !== 4){
    return false;
  }
  var result = true;
    for(var i = 0; i < inputs.length; i++){
      for(var j = i + 1; j < inputs.length; j++){
        if(inputs[i] == inputs[j]){
          result = false;
        }
      }
    }
    return result;
    for(var i = 0; i < inputs.length; i++){
      if(isNaN(inputs[i])){
        return false;
       }
     }
};

Game.prototype.resultShow = function(inputs){

    if(this.guess.getTips(inputs) === '4A0B'){
      return 'Congratulations!You win!';
    }
    else{
      return 'You lose!Tips:'+this.guess.getTips(inputs);
    }

};

Game.prototype.chanceReduce = function(){

    this.chance -= 1;
    
    if(this.chance < 0){
      this.chance = 0;
    }

    if(this.chance == 0){
      return 'Game over! You use out of you chances!';
    }
   else{
     return this.chance;
   }
};
