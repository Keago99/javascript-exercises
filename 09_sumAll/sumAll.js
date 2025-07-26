const sumAll = function(first, second) {
    let sum = 0;
    if (Number.isInteger(first) && first > 0 && Number.isInteger(second) && second > 0){
        if (first < second){
            for (let i = first; i <= second; i++){
            sum += i;
            }
            return sum;
        }
        else{
            for (let i = second; i <= first; i++){
                sum += i;
            }
            return sum;
        }
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
