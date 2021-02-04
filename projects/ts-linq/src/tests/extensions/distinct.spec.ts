describe('distinct', () => {
  it('should be distinct', () => {
    expect([0, 0, 1, 1, 2, 3, 3, 4].distinct()).toEqual([0, 1, 2, 3, 4]);
  });

  it('should be distinct', () => {
    expect(
      [{ x: 0 }, { x: 1 }, { x: 1 }, { x: 0 }].distinct((a, b) => a.x === b.x)
    ).toEqual([{ x: 0 }, { x: 1 }]);
  });
});
