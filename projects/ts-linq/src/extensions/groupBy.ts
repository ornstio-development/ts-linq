export function groupBy<T, U>(this: Array<T>, func: (t: T, i: number) => U): Map<U, Array<T>> {
  const map = new Map<U, Array<T>>();
  this.forEach((value, i) => {
    const obj = func(value, i);
    if (map.get(obj)) {
      map.get(obj).push(value);
    } else {
      map.set(obj, [value]);
    }
  });
  return map;
}
