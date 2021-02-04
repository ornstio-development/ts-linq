describe('except', () => {
  it('should except', () => {
    expect([0, 1, 2, 2, 1, 4].except([1, 2, 2, 3])).toEqual([0, 4, 3]);
  });

  it('should except', () => {
    expect(
      [{ x: 0 }, { x: 1 }, { x: 2 }].except(
        [{ x: 0 }, { x: 1 }, { x: 3 }],
        (a, b) => a.x === b.x
      )
    ).toEqual([{ x: 2 }, { x: 3 }]);
  });
});
