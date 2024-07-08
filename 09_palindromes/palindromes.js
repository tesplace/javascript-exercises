const palindromes = function (string) {
    let word = string.toLowerCase().replace(/[^\w\']/g,"");
    

    let newArray = word.split("").reverse().join("");
    

    return newArray === word;
};

// Do not edit below this line
module.exports = palindromes;


// spread the given string to an array 
// find the index of the coma and spaces if there are any and pop them out
// reverse array
// rejoin as a new array
// check if its the same with the given string