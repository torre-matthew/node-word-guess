let Letter = require("./letter");

class Word {
    constructor(word) {
        this.word = word.split("");
        this.string = "";
    }

    wordAsString() {
        for (let i = 0; i < this.word.length; i++) { 
            let newLetter = new Letter("a", this.word[i]); 
            this.string += " " + newLetter.letterPrinter();      
        }
        
        console.log(this.string);    
    }

    wordLetterChecker() {
        for (let i = 0; i < this.word.length; i++) { 
            let newLetter = new Letter("a", this.word[i]); 
            this.string += " " + newLetter.letterChecker();      
        }
        console.log(this.string);
    }
}

// let newWord = new Word("Pudding");
// newWord.wordAsString();

module.exports = Word;