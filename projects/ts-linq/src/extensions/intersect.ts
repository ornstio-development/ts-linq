export function intersect<T>(this: Array<T>, arr: Array<T>, func?: (a: T, b: T) => boolean): Array<T> {
  return this.filter(x => arr.any(y => (func ? func(x, y) : x === y))).distinct(func);
}
