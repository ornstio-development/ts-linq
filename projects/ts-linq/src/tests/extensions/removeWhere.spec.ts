describe('removeWhere', () => {
  it('should remove where', () => {
    const arr = [0, 1, 2];
    arr.removeWhere(_ => _ > 0);
    expect(arr).toEqual([0]);
  });

  it('should not remove where', () => {
    const arr = [0, 1, 2];
    arr.removeWhere(_ => _ > 2);
    expect(arr).toEqual([0, 1, 2]);
  });
});
