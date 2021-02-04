export function first<T>(this: Array<T>, func?: (t: T, i: number) => boolean): T {
  return this.find((_, i) => (func ? func(_, i) : true));
}
