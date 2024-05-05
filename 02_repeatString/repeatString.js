const repeatString = function(word, amount) {    
    let outcome = "";
  
    if (amount < 0) {
        outcome =  "ERROR";
    }

    for (let i = 0; i < amount; ++i) {
        outcome += word ;
    };

    return outcome;
};

// Do not edit below this line
module.exports = repeatString;
