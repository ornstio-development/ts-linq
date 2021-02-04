export function select<T, U>(this: Array<T>, func: (t: T, i: number) => U): Array<U> {
  return this.map((t, i) => func(t, i));
}
