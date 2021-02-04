describe('groupBy', () => {
  it('should group by value', () => {
    const x = ['a', 'b', 'a', 'b', 'a'].groupBy((_: string) => _);
    expect(Array.from(x.keys()).length).toEqual(2);
    expect(x.get('a').length).toEqual(3);
    expect(x.get('b').length).toEqual(2);
  });
});
