export function min<T>(this: Array<T>, func: (t: T) => number): number {
  return this.any() ? Math.min(...this.map(_ => func(_))) : NaN;
}
