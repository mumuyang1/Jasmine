function RandomNumber(){

}
// RandomNumber.prototype.generateRandomNumber = function(){
//
//   var number = [1,2,3,4];
//   return number;
// }
RandomNumber.prototype.generateRandomNumber = function(){

  var randomNumber = [];

  for(var i = 0; i < 4; i++){

    var num = parseInt(Math.random()*10);



    // var flag = randomNumber.indexOf(num);
    // console.log(flag);
    while(randomNumber.indexOf(num) != -1){
      num = parseInt(Math.random()*10);
      }
      randomNumber.push(num);
    }

  console.log(randomNumber);
  return randomNumber;


}
