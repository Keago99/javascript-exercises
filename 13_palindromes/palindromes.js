



const palindromes = function (word) {
    const wordArray = word.toLowerCase().split("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    const filteredArray = wordArray.filter((char) => {
        if(alphabet.includes(char)){
            return char;
        }
    });
    const reversedArray = filteredArray.toReversed();
    if (JSON.stringify(filteredArray) === JSON.stringify(reversedArray)){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
