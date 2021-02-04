import { OrderableArray } from '../types/orderable-array';
import { sort } from '../functions/sort';

export function orderBy<T>(this: Array<T>, func: (t: T) => string | number): OrderableArray<T> {
  const arr = this.sort((a, b) => sort(func(a), func(b))) as OrderableArray<T>;
  arr.orders = [func];
  return arr;
}
