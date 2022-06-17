/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var total = 0;

while(num > 0) {
    num = returnNext(num);
    total++;
}
    return total;
}

function returnNext(n){
    if(n % 2 === 0) {
        return n / 2;
    } else {
        return n - 1;
    }
}
