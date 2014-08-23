$(document).ready(function(){

  var randomNumber = new RandomNumber();
  var compareNumber = new CompareNumber();
  var guess = new Guess(randomNumber, compareNumber);
  var game = new Game(guess);


  $('#start').on('click',function(){

    var answer = game.start();
    var value = $('#chance');
    value.text(game.chance);
  });

  $('#submit').on('click',function(){

     var input = $('#input').val().split("");
     var inputs = [];

     for(var i = 0; i < input.length; i++){
       inputs.push(parseInt(input[i]));
     }

     console.log(inputs);

     if(!game.judgeInput(inputs)){
        $('#myModal').modal();
     }
     $('#chance').text(game.chance);
     $('#result').append(game.resultShow());
     console.log(game.resultShow());

  });
});
