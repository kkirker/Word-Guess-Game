

    
    
    $(document).ready(function() {
        console.log('i am linked');

        let winsNumber = 0
        let guessesNumber = 13;
        
        let randomWord = [
        'lava',
        'mortal kombat',
        'vacation',
        'instagram',
        'your mom',
        'hawaii',
        'gif',
        'javascript',
        'jquery',
        'homework'];
        //console.log(randomWord[0]);

        $('#wins-display').html('Wins : ' + winsNumber);

        let word = randomWord[Math.floor(Math.random() * randomWord.length)];

        console.log(word);

        let emptyAnswer = [];
        for (i = 0 ; i < word.length ; i++) {
            emptyAnswer[i] = '_';
        }

        let remaingLetters = word.length;

        console.log(emptyAnswer);
        

        $('body').keydown(function() {
            //console.log('a key was pressed');
            $('#hiding-header').hide();
            $('#dashes').html(emptyAnswer);
            
            guessesNumber--;
            //console.log(guessesNumber);
            $('#guesses-remaining').html('Guesses Remaining: ' + guessesNumber);


            if (guessesNumber < 1) {
                $('#guesses-remaining').html("You have lost, may God have mercy upon your soul");
            };


            


            if (emptyAnswer === word) {
                winsNumber++;
            };

        });







        





       



        

















    });

