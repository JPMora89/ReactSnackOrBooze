const unroll = require("./unroll");

describe('unroll', () => {
  test('should correctly unroll a square array in a spiral pattern', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];

    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

    const unrolledArray = unroll(square);

    expect(unrolledArray).toEqual(expected);
  });

});
