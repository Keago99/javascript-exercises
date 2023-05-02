const sumAll = function(start, end) {
    let totNum = 0;
    
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR';
    }

    if (start > end){
        const temp = start;
        start = end;
        end = temp;
    }

    if (start < 0 || end < 0){
        return "ERROR";
    }

    for(i = start; i < end+1; i++){

        totNum = totNum + i; 
    }
    return totNum;
};

// Do not edit below this line
module.exports = sumAll;
