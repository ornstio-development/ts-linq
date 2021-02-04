export function skip<T>(this: Array<T>, count: number): Array<T> {
  return this.slice(count, this.length);
}
