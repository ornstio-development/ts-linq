describe('sum', () => {
  it('should sum', () => {
    expect([0, 1, 2, 3].sum(_ => _)).toEqual(6);
  });

  it('should be 0 when array is empty', () => {
    expect([].sum(_ => _)).toEqual(0);
  });
});
