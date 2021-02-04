export function average<T>(this: Array<T>, func: (t: T) => number): number {
  return this.map(_ => func(_)).sum(_ => _) / this.length;
}
