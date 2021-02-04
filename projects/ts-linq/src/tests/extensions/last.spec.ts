describe('last', () => {
  it('should return undefined when array is empty', () => {
    expect([].last()).toBeUndefined();
  });

  it('should return value when array is not empty', () => {
    expect([0, 1, 2].last()).toEqual(2);
  });

  it('should return value that matches criteria', () => {
    expect(
      [
        { x: 2, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 1, y: 2 },
      ].last(_ => _.x === 2)
    ).toEqual({
      x: 2,
      y: 2,
    });
  });

  it('should not reverse array', () => {
    const arr = [1, 2];
    const last = arr.last();
    expect(arr[0]).toEqual(1);
    expect(arr[1]).toEqual(2);
  });
});
