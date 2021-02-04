describe('average', () => {
  it('should be NaN when array is empty', () => {
    expect([].average((_) => _)).toBeNaN();
  });

  it('should average', () => {
    expect([0, 2, 4, 6, 8].average((_) => _)).toEqual(4);
  });
});
