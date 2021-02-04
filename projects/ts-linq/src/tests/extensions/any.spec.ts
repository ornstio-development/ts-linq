describe('any', () => {
  it('should be true when length >= 1', () => {
    expect([0].any()).toEqual(true);
  });

  it('should be false when length < 1', () => {
    expect([].any()).toEqual(false);
  });

  it('should be true when condition is true', () => {
    expect([0, 1].any((_) => _ === 0)).toEqual(true);
  });

  it('should be false when condition is false', () => {
    expect([0, 1].any((_) => _ === 3)).toEqual(false);
  });
});
