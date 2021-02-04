export function except<T>(this: Array<T>, arr: Array<T>, func?: (a: T, b: T) => boolean): Array<T> {
  const intersect = this.intersect(arr, func);
  return this.concat(arr)
    .filter(x => !intersect.any(y => (func ? func(x, y) : x === y)))
    .distinct(func);
}
