const findTheOldest = function(people) {
    const yearNow = 2024;

    return people.reduce((oldest, person) => {
        let oldestAge = (oldest.yearOfDeath !== undefined ? oldest.yearOfDeath : yearNow) - oldest.yearOfBirth; 
        let personAge = (person.yearOfDeath !== undefined ? person.yearOfDeath : yearNow) - person.yearOfBirth;
        if(oldestAge > personAge){
            return oldest;
        } else {
            return person;
        }
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
