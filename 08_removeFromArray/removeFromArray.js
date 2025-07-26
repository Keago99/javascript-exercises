const removeFromArray = function(array, ...args) {
   for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        while (array.indexOf(arg) > -1) {
            const index = array.indexOf(arg);
            array.splice(index, 1);
        }
    }
    return array;
}


// Do not edit below this line
module.exports = removeFromArray;
