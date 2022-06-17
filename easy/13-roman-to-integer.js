// Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanValueList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var convertedIP = s.split('');
var sum = 0;
for(let i = 0; i < convertedIP.length -1 ; i++) {
    if(romanValueList[convertedIP[i]] < romanValueList[convertedIP[i+1]]){
        // if true then minus
        sum -= romanValueList[convertedIP[i]];
    } else {
        sum += romanValueList[convertedIP[i]];
    }
}
    sum += romanValueList[convertedIP[convertedIP.length-1]];
    return sum;
}
