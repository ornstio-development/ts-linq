describe('toDictionary', () => {
  it('should convert to dictionary', () => {
    const arr = [{ x: 'A' }, { x: 'B' }];
    const dict = arr.toDictionary((_) => _.x);
    expect(dict[arr[0].x]).toEqual(arr[0]);
    expect(dict[arr[1].x]).toEqual(arr[1]);
  });
});
