describe('median', () => {
  it('should be NaN if the array is empty', () => {
    expect([].median(_ => _)).toBeNaN();
  });

  it('should be first value if array length is 1', () => {
    expect([1].median(_ => _)).toEqual(1);
  });

  it('should be median if array is even', () => {
    const value = [5, 3, 4, 2];
    expect(value.median(_ => _)).toEqual([3, 4].average(_ => _));
  });

  it('should be median if array is odd', () => {
    const value = [4, 2, 1];
    expect(value.median(_ => _)).toEqual(2);
  });

  it('should be median if array is odd', () => {
    const value = [5, 3, 4, 2, 1];
    expect(value.median(_ => _)).toEqual(3);
  });

  it('should be median if array is odd', () => {
    const value = [5, 3, 4, 2, 1, 1, 1];
    expect(value.median(_ => _)).toEqual(2);
  });

  it('should be median if array is odd', () => {
    const value = [{ x: 5 }, { x: 4 }, { x: 2 }, { x: 3 }, { x: 1 }];
    expect(value.median(_ => _.x)).toEqual(3);
  });
});
