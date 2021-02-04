import { sort } from '../../functions/sort';

describe('sort', () => {
  it('should sort numerical', () => {
    expect(sort(1, 2)).toEqual(-1);
  });

  it('should sort numerical', () => {
    expect(sort(2, 1)).toEqual(1);
  });

  it('should sort numerical', () => {
    expect(sort(2, 2)).toEqual(0);
  });

  it('should sort alphabetical', () => {
    expect(sort('b', 'a')).toEqual(1);
  });

  it('should not sort', () => {
    expect(sort(0, 'a')).toEqual(0);
  });
});
