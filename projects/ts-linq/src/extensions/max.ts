export function max<T>(this: Array<T>, func: (t: T) => number): number {
  return this.any() ? Math.max(...this.map(_ => func(_))) : NaN;
}
