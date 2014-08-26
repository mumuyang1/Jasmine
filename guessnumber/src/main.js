$(document).ready(function(){

  var randomNumber = new RandomNumber();
  var compareNumber = new CompareNumber();
  var guess = new Guess(randomNumber, compareNumber);
  var game = new Game(guess);
  // console.log(game.guess.randomNumber);

  $('#start').on('click',function(){

    var answer = game.start();

    console.log(answer);
    var value = $('#chance');
    value.text(game.chance);
  });

  $('#submit').on('click',function(){

     var input = $('#input').val().split("");
     var inputs = [];

     for(var i = 0; i < input.length; i++){
       inputs.push(parseInt(input[i]));
     }

    //  console.log(inputs);

     if(!game.judgeInput(inputs)){
        $('#myModal').modal();
     }
     var chanceNumber = game.chanceReduce();
     $('#chance').text(chanceNumber);
     $('#result').text(game.resultShow(inputs));
    //  console.log(game.resultShow());

  });
});
