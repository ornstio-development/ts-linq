describe('selectMany', () => {
  it('should select many', () => {
    const expectation = [
      String.fromCharCode(0),
      String.fromCharCode(1),
      String.fromCharCode(2),
      String.fromCharCode(3),
      String.fromCharCode(4),
      String.fromCharCode(5),
    ];
    [
      [0, 1],
      [2, 3],
      [4, 5],
    ]
      .selectMany((a) => String.fromCharCode(a))
      .forEach((str, i) => {
        expect(str).toEqual(expectation[i]);
      });
  });
});
