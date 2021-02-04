describe('remove', () => {
  it('should remove', () => {
    const arr = [0, 1, 2];
    arr.remove(0);
    expect(arr).toEqual([1, 2]);
  });

  it('should not remove', () => {
    const arr = [0, 1, 2];
    arr.remove(3);
    expect(arr).toEqual([0, 1, 2]);
  });
});
