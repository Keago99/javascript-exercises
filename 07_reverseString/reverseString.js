const reverseString = function(string) {
    let splitString = string.split("");
    splitString = splitString.reverse();
    let newString = splitString.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
