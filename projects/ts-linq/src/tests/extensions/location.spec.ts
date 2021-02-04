describe('location', () => {
  it('should find location', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].location(_ => _.x === 2)).toEqual(1);
  });

  it('should not find location', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].location(_ => _.x === 4)).toEqual(-1);
  });
});
