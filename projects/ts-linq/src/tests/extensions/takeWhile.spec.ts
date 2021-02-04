describe('takeWhile', () => {
  it('should takeWhile', () => {
    expect([0, 1, 2, 3, 4, 0].takeWhile((_) => _ < 3)).toEqual([0, 1, 2]);
  });
});
