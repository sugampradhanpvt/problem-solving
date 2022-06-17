/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = calculateWealth(accounts[0]);

    for(let i = 1; i < accounts.length; i++) {
        const getAmount = calculateWealth(accounts[i]);
        if(getAmount > richest){
            richest = getAmount;
        }
    }

    return richest;
};

function calculateWealth(wealth) {
    let total = 0;
    for(let i = 0; i < wealth.length; i++){
        total += wealth[i];
    }
    return total;
}
