describe('mode', () => {
  it('should equal array when array is empty', () => {
    expect([].mode((_) => _)).toEqual([]);
  });

  it('should equal array when array is equal', () => {
    expect([0, 1, 2, 3].mode((_) => _)).toEqual([0, 1, 2, 3]);
  });

  it('should equal mode of array', () => {
    expect([0, 0, 1, 2, 2].mode((_) => _)).toEqual([0, 2]);
  });

  it('should equal mode of array', () => {
    expect([{ x: 0 }, { x: 0 }, { x: 1 }].mode((_) => _.x)).toEqual([0]);
  });
});
