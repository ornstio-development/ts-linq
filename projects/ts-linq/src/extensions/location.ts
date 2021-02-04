export function location<T>(this: Array<T>, func: (t: T) => boolean): number {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      return i;
    }
  }
  return -1;
}
