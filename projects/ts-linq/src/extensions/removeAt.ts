export function removeAt<T>(this: Array<T>, index: number): void {
  this.remove(this[index]);
}
