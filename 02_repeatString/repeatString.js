const repeatString = function(text, number_of_repeat) {
    if(number_of_repeat < 0) {
        return 'ERROR';
    }

    let repeatingText = '';
    for(let i = 0; i < number_of_repeat; i++) {
        repeatingText += text;
    }
    return repeatingText;
};

// Do not edit below this line
module.exports = repeatString;
