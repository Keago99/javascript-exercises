const getTheTitles = function(array) {
  return array.reduce((titles, book) => {
    return [...titles, book.title];
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
