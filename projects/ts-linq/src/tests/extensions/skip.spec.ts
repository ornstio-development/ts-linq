describe('skip', () => {
  it('should skip', () => {
    expect([0, 1, 2, 3].skip(2)).toEqual([2, 3]);
  });
});
