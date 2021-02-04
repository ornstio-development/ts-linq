describe('intersperse', () => {
  it('should intersperse', () => {
    const expectation = 4;
    const value = [1, 2, 3].intersperse(expectation);
    expect(value.length).toEqual(5);
    expect(value[0]).toEqual(1);
    expect(value[1]).toEqual(expectation);
    expect(value[2]).toEqual(2);
    expect(value[3]).toEqual(expectation);
    expect(value[4]).toEqual(3);
  });
});
