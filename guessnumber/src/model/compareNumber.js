function CompareNumber(){

}

CompareNumber.prototype.compare = function(answer,inputs){

  var a = 0;
  var b1 = 0;
  var b2 = 0;

  for(var i = 0; i < answer.length; i++){

    if(answer[i] == inputs[i]){
      a += 1;
    }

    for(var j = 0; j < inputs.length; j++){
      if(answer[i] == inputs[j]){

        b1 += 1;
        b2 = b1 - a;
      }
    }
  }

  return a+'A'+b2+'B';

}
