import { nameof } from '../../functions/nameof';

class Person {
  name: string;
}

describe('nameof', () => {
  it('should get nameof', () => {
    expect(nameof((_: Person) => _.name)).toEqual('name');
  });
});
