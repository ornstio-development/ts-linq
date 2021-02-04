export function last<T>(this: Array<T>, func?: (t: T, i: number) => boolean): T {
  return [...this].reverse().find((_, i) => (func ? func(_, i) : true));
}
