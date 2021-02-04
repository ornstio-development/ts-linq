describe('thenBy', () => {
  it('should chain sort', () => {
    const sorted = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]
      .orderBy((_) => _.x)
      .thenBy((_) => _.y);
    let index = 0;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        expect(sorted[index].x).toEqual(i + 1);
        expect(sorted[index].y).toEqual(j + 1);
        index += 1;
      }
    }
  });
});
