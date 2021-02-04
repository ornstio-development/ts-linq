describe('intersect', () => {
  it('should intersect', () => {
    expect([0, 1, 2, 2, 1, 0].intersect([0, 1, 1, 0])).toEqual([0, 1]);
  });

  it('should intersect', () => {
    expect(
      [{ x: 0 }, { x: 1 }, { x: 2 }].intersect(
        [{ x: 0 }, { x: 1 }],
        (a, b) => a.x === b.x
      )
    ).toEqual([{ x: 0 }, { x: 1 }]);
  });
});
