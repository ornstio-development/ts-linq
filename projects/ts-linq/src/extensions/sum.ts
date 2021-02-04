export function sum<T>(this: Array<T>, func: (t: T) => number): number {
  return this.map(_ => func(_)).reduce((a, b) => (a += b), 0);
}
