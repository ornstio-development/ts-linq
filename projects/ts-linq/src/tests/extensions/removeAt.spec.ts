describe('removeAt', () => {
  it('should remove at', () => {
    const arr = [0, 1, 2];
    arr.removeAt(0);
    expect(arr).toEqual([1, 2]);
  });

  it('should not remove at', () => {
    const arr = [0, 1, 2];
    arr.removeAt(3);
    expect(arr).toEqual([0, 1, 2]);
  });
});
