const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let stringOutput = "";

    for (let i = 0; i < num; i++) {
        stringOutput += string;
    }

    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
