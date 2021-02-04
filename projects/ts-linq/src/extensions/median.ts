import { sort } from '../functions/sort';

export function median<T>(this: Array<T>, func: (t: T) => number): number {
  if (!this.any()) {
    return NaN;
  }
  if (this.length === 1) {
    return func(this[0]);
  }
  const sorted = this.sort((a, b) => sort(func(a), func(b)));
  const x = [sorted[Math.floor((sorted.length - 1) / 2)], sorted[Math.ceil((sorted.length - 1) / 2)]];
  return x.map(_ => func(_)).average(_ => _);
}
