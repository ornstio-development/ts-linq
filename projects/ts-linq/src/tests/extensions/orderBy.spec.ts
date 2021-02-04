describe('orderBy', () => {
  it('should order by number', () => {
    const arr = [5, 4, 3, 2, 1];
    const sorted = arr.orderBy((_) => _);
    arr.reverse().forEach((a, i) => expect(a).toEqual(sorted[i]));
  });

  it('should order by number', () => {
    const arr = ['d', 'c', 'b', 'a'];
    const sorted = arr.orderBy((_) => _);
    arr.reverse().forEach((a, i) => expect(a).toEqual(sorted[i]));
  });
});
