describe('all', () => {
  it('should be true when condition is true', () => {
    const value = [{ x: 0 }, { x: 0 }];
    expect(value.all((v) => v.x === 0)).toEqual(true);
  });

  it('should be false when condition is false', () => {
    const value = [{ x: 0 }, { x: 1 }];
    expect(value.all((v) => v.x === 0)).toEqual(false);
  });

  it('should be true when length >= 1', () => {
    expect([0].all()).toBe(true);
  });

  it('should be false when length < 0', () => {
    expect([].all()).toBe(false);
  });
});
