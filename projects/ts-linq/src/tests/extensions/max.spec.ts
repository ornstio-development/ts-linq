describe('max', () => {
  it('should return NaN when array is empty', () => {
    expect([].max((_) => _)).toBeNaN();
  });

  it('should return max value', () => {
    expect([2, 3, 0].max((_) => _)).toEqual(3);
  });
});
