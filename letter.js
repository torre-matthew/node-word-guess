class Letter {
    constructor(guessedLetter, givenLetter) {
        this.userGuess = guessedLetter;
        this.givenLetter = givenLetter;
        this.guessed = false;
    }

    letterPrinter() {
        if (this.userGuess.toUpperCase() === this.givenLetter.toUpperCase()) {
            return this.givenLetter + " ";
        }

        if (this.givenLetter == " ") {
            return "  ";
        }
        
        if (this.userGuess.toUpperCase() != this.givenLetter.toUpperCase()) {
            return "_  ";
        }
    }

    letterChecker() {
        if (this.userGuess === this.givenLetter) {
            this.guessed = true;
            return this.guessed;
        }
        else {
            return this.guessed;
        }

    }
}

module.exports = Letter;