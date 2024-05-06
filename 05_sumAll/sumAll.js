const sumAll = function(a, b) {
    let outcome = " ";
     
    if ( typeof(b) != `number` || typeof(a) != `number`) {
        outcome = "ERROR";
    } else if ( a < 0 || b < 0) {
        outcome = "ERROR";
    } else if (a > b) {
        outcome = (a*(a+1)/2) - ((b*(b+1)/2)-1);
    } else {
        outcome = (b*(b+1)/2) - ((a*(a+1)/2)-1);
    }

    return outcome

};

// Do not edit below this line
module.exports = sumAll;
