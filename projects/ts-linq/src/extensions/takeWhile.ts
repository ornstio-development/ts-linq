export function takeWhile<T>(this: Array<T>, func: (t: T) => boolean): Array<T> {
  return this.take(this.indexOf(this.first(_ => !func(_))));
}
