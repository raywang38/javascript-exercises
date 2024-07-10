const findTheOldest = function(arr) {
    const sortedAgeArray = arr.reduce((personArray, person) => {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = new Date().getFullYear();
        }
        const obj = {
            name : person.name,
            age : person.yearOfDeath - person.yearOfBirth    
        };
        personArray.push(obj);
        return personArray;
    }, []).sort((a, b) => a.age > b.age ? 1 : -1);
    const oldest = sortedAgeArray.pop();
    delete oldest.age;
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
