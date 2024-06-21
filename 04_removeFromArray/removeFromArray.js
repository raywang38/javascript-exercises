const removeFromArray = function(origArray, ...args) {

    const newArray = [...new Set(origArray)];

    for (let eachArg of args) {
        if (newArray.includes(eachArg)) {
            newArray.splice(newArray.indexOf(eachArg), 1);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
