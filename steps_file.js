// in this file you can append custom step methods to 'I' object
const checkIfResultContainsDuplicates = (array) => {
  return (new Set(array)).size == array.length;
}

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    checkIfResultContainsDuplicates: checkIfResultContainsDuplicates
  });
}
