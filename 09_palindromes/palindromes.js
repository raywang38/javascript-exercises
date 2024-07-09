const palindromes = function (string) {
    const stringArray = string.replace(/[\.,?! ]/g, "").toLowerCase().split("");
    const reverseStringArray = string.replace(/[\.,?! ]/g, "").toLowerCase().split("").reverse();

    for (i in stringArray) {
        if (stringArray[i] === reverseStringArray[i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
