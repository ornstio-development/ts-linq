describe('select', () => {
  it('should select value', () => {
    const value = 'a';
    const x = [0].select((_) => value);
    expect(x[0]).toEqual(value);
  });
});
