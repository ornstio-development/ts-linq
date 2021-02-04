describe('toMap', () => {
  it('should convert to map', () => {
    const arr = [{ x: 1 }];
    const map = arr.toMap((_) => _.x);
    expect(map.get(arr[0].x)).toEqual(arr[0]);
  });
});
