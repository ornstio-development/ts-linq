export function toMap<T, U>(this: Array<T>, func?: (t: T, i: number) => U): Map<U, T> {
  return this.reduce((obj, value, i) => {
    obj.set(func(value, i), value);
    return obj;
  }, new Map<U, T>());
}
