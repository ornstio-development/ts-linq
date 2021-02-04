export function take<T>(this: Array<T>, count: number): Array<T> {
  return this.slice(0, count);
}
