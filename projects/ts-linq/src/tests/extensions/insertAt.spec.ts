describe('insertAt', () => {
  it('should insert values', () => {
    const arr = [0, 1, 2];
    arr.insertAt(0, 1);
    expect(arr[0]).toEqual(1);
  });

  it('should insert values', () => {
    const arr = [0, 1, 2];
    arr.insertAt(1, 4, 5);
    expect(arr[1]).toEqual(4);
    expect(arr[2]).toEqual(5);
  });

  it('should insert values', () => {
    const arr = [0, 1, 2];
    arr.insertAt(10, 3);
    expect(arr[3]).toEqual(3);
  });
});
