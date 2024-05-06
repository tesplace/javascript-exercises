const removeFromArray = function(array, ...element) {

    const newArray = [];

    array.forEach( (elements) => {

        if (!element.includes(elements)) {
          newArray.push(elements);
        }
      });

      return newArray;
 
};

// Do not edit below this line
module.exports = removeFromArray;
