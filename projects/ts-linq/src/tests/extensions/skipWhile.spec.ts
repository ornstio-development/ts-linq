describe('skipWhile', () => {
  it('should skipWhile', () => {
    expect([0, 0, 0, 1, 2, 0].skipWhile((_) => _ < 1)).toEqual([1, 2, 0]);
  });
});
