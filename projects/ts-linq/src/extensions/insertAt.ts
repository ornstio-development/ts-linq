export function insertAt<T>(this: Array<T>, index: number, ...values: T[]): void {
  for (let i = values.length - 1; i >= 0; i--) {
    this.splice(index, 0, values[i]);
  }
}
