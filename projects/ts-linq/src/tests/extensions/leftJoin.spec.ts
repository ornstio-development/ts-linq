describe('leftJoin', () => {
  it('should left join with equality', () => {
    const a = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const b = [{ x: 1 }, { x: 3 }, { x: 4 }];
    expect(
      a.leftJoin(
        b,
        _ => _.x,
        _ => _.x,
        (a1, b1) => b1?.x,
        (a1, b1) => a1 === b1
      )
    ).toEqual([1, undefined, 3]);
  });

  it('should left join', () => {
    const a = [1, 2, 3];
    const b = [1, 3, 4];
    expect(
      a.leftJoin(
        b,
        _ => _,
        _ => _,
        (a1, b1) => b1
      )
    ).toEqual([1, undefined, 3]);
  });
});
