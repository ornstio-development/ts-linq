export function all<T>(this: Array<T>, func?: (t: T, i: number) => boolean): boolean {
  return func ? this.every((_, i) => func(_, i)) : this.length > 0;
}
