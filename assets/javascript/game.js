

    
    
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

        //just checking array exists fine in colse-console.log(randomWord[0]);

        $('#wins-display').html('Wins : ' + winsNumber);
        
        //chooses random word from array options above
        let word = randomWord[Math.floor(Math.random() * randomWord.length)];
        //consoling to verify word chosen correctly, or if you want to open console and cheat
        console.log(word);




        
        //iterating through the randomly selected word and changing string character to an underscore. 
        let emptyAnswer = [];
        for (let i = 0 ; i < word.length ; i++) {
            emptyAnswer[i] = '_';
        }

        let remaingLetters = word.length;

        //console.log(emptyAnswer);


        let letterGuessed = [];
        

    document.onkeydown = function (e) {
            let keyPress;


        if (typeof event !== 'undefined') {
            keyPress = event.keyCode;
        }
        else if (e) {
                keyPress = e.which;
        }

        letterGuessed.push(String.fromCharCode(keyPress));

        console.log(letterGuessed);

        for (let a = 0; a < word.length; a++) {
            console.log(word.charAt(a));
            //needs code here like if word.charAt(a) === string.fromcharCode(keyPress) {
            //    $('#dashes').html(word.charAt(a));
            // code would need to replace the keyPress string from the dash at the index where the word contained an equal string, and then else the code below that puts the keyPress string as a guess made.
            
            
        }
            

        let newHTML = [];
        for (let index = 0; index < letterGuessed.length; index++) {
            let lettersGuessed = letterGuessed[index];
            newHTML.push(lettersGuessed);

        };
        $('#letters-guessed').html(newHTML.join(''));


        return false;   // Prevents the default action
    };
       

        $('body').keydown(function() {
            //console.log('a key was pressed');
            $('#hiding-header').hide();
            $('#dashes').html(emptyAnswer);
            
            guessesNumber--;
            console.log(guessesNumber);
            $('#guesses-remaining').html('Guesses Remaining: ' + guessesNumber);

            if (guessesNumber < 1) {
                $('#guesses-remaining').html("You have lost, may God have mercy upon your soul");
            };

            if (emptyAnswer === word) {
                winsNumber++;
            };

        });







        





       



        

















    });

