const fibonacci = function(num) {
    let sum = 0;
    let val1 = 1;
    let val2 = 1;

    if (!isNaN(num)) {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    }
    else if (num === 0) {
        return sum;
    }
    else if (num === 1) {
        return val1;
    }
    else if (num === 2) {
        return val2;
    }

    // 1, 1, 2, 3, 5, 8, 13
    for (let i = 0; i < num - 2; i++) {
        sum = val1 + val2;
        val1 = val2;
        val2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
