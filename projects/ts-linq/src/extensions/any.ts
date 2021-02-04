export function any<T>(this: Array<T>, func?: (t: T, i: number) => boolean): boolean {
  return func ? this.some((_, i) => func(_, i)) : this.length > 0;
}
