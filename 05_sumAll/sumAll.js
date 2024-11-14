const sumAll = function(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
        return 'ERROR';
    }
    if(number1 % 1 !== 0 || number2 % 1 !== 0) {
        return 'ERROR';
    }
    if(number1 < 0 || number2 < 0) {
        return 'ERROR';
    }

    const lower_bound = (number1 < number2) ? number1 : number2;
    const upper_bound = (number1 > number2) ? number1 : number2;
    let total = 0;
    for(let i = lower_bound; i <= upper_bound; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
