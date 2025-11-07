const findTheOldest = function(people) {

    //create an array with the ages a new derived property
    const ageArray = people.map(person =>{
        const deathYear = person.yearOfDeath || 2025;
        return deathYear - person.yearOfBirth;
    });
    const highestNumber = Math.max(...ageArray);
    const indexOfOldest = ageArray.indexOf(highestNumber)
    return people[indexOfOldest];

   
}

// Do not edit below this line
module.exports = findTheOldest;
