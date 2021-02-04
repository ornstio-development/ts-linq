export function removeWhere<T>(this: Array<T>, func: (t: T, i: number) => boolean): void {
  this.filter(func).forEach(value => this.remove(value));
}
