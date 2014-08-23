describe('game', function () {
        var inputs1;
        var inputs2;
        var answer;
        var compare;
        var guess;
        var game;

    beforeEach(function () {

        inputs1 = [1,1,3,4];
        inputs2 = [1,2,3,4];
        inputs3 = [1,4,3,7];
        inputs4 = [1,3,4,5,6];
        inputs5 = [3,5,8,'b'];

        answer = new RandomNumber();
        spyOn(answer, 'generateRandomNumber').and.returnValue([1,2,3,4]);

        compareNumber = new CompareNumber();
        // spyOn(compareNumber, 'compare');

        guess = new Guess(answer,compareNumber);
        game = new Game(guess);

    });

    it('can start',function(){

        var chanceNumber = game.start();
        expect(game.chance).toEqual(6);
        expect(answer.generateRandomNumber.calls.count()).toEqual(1);
    });

    it('inputs length is 4',function(){

        var result4 = game.judgeInput(inputs4);
        expect(result4).toBe(false);
    });

    it('inputs is not repeat',function(){

        var result1 = game.judgeInput(inputs1);
        expect(result1).toBe(false);

        var result2 = game.judgeInput(inputs2);
        expect(result2).toBe(true);
    });

    it('inputs is a number',function(){

        var result4 = game.judgeInput(inputs4);
        expect(result4).toBe(false);
    });


    it('can show result',function(){

        var resultShow1 = game.resultShow(inputs2);
        expect(resultShow1).toBe('Congratulations!You win!');

        var resultShow2 = game.resultShow(inputs3);
        expect(resultShow2).toBe('You lose!Tips:2A1B');
    });

    it('chance can reduce',function(){

        var chanceNumber5 = game.chanceReduce();
        var chanceNumber4 = game.chanceReduce();
        var chanceNumber3 = game.chanceReduce();
        var chanceNumber2 = game.chanceReduce();
        var chanceNumber1 = game.chanceReduce();
        expect(chanceNumber4).toBe(4);
        expect(chanceNumber1).toBe(1);
        expect(game.chanceReduce()).toBe('Game over! You use out of you chances!');
    });
});
