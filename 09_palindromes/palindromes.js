const palindromes = function (text) {
    const banList = '!,.-?+=- '.split('');
    let sanitezedText = text.toLowerCase();
    sanitezedText = banList.reduce((workedText, banChar) => workedText.split(banChar).join(''), sanitezedText);

    return sanitezedText.split('').reverse().join('') === sanitezedText;
};

// Do not edit below this line
module.exports = palindromes;
