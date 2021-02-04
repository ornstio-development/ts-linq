describe('min', () => {
  it('should return NaN when array is empty', () => {
    expect([].min((_) => _)).toBeNaN();
  });

  it('should return min value', () => {
    expect([2, 3, 0].min((_) => _)).toEqual(0);
  });
});
