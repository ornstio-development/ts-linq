export function distinct<T>(this: Array<T>, func?: (a: T, b: T) => boolean): Array<T> {
  return this.filter((value, i, arr) => arr.indexOf(arr.first(x => (func ? func(value, x) : x === value))) === i);
}
