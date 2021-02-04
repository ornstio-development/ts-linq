export function skipWhile<T>(this: Array<T>, func: (t: T) => boolean): Array<T> {
  return this.skip(this.indexOf(this.first(_ => !func(_))));
}
