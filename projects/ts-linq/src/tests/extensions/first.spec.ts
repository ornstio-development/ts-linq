describe('first', () => {
  it('should return undefined when array is empty', () => {
    expect([].first()).toBeUndefined();
  });

  it('should return value when array is not empty', () => {
    const obj = { x: 1 };
    expect([obj, null].first()).toEqual(obj);
  });

  it('should return value that matches criteria', () => {
    expect(
      [
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ].first((_) => _.x === 2)
    ).toEqual({
      x: 2,
      y: 1,
    });
  });
});
