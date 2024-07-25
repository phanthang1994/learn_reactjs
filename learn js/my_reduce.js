Array.prototype.reduce2 = function (callback, result) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(result, this[index], index, this);
        }
    }
    return result;
};

var numbers = [1, 2, 3, 4, 5];
var result = numbers.reduce2(( accumulator,  currentValue) => accumulator + currentValue,0);
console.log(result);

