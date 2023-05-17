function unroll(square) {
    const result = [];
  
    while (square.length > 0) {
      // Extract top row
      result.push(...square.shift());
  
      // Extract right column
      for (let i = 0; i < square.length; i++) {
        result.push(square[i].pop());
      }
  
      // Extract bottom row
      if (square.length > 0) {
        result.push(...square.pop().reverse());
      }
  
      // Extract left column
      for (let i = square.length - 1; i >= 0; i--) {
        if (square[i].length > 0) {
          result.push(square[i].shift());
        }
      }
    }
  
    return result;
  }
  
//   const square = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
  
//   const unrolledArray = unroll(square);
//   console.log(unrolledArray); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  
module.exports = unroll;
