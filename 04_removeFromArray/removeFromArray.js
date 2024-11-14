const removeFromArray = function(list, ...args) {
    let manipulatedList = [...list]
    for(let arg of args) {
        manipulatedList = manipulatedList.filter((item) => item !== arg);
    }
    return manipulatedList;
};

// Do not edit below this line
module.exports = removeFromArray;
