export function intersperse<T>(this: Array<T>, value: T): Array<T> {
  return this.reduce((arr, t, i) => {
    arr.push(t);
    if (i !== this.length - 1) {
      arr.push(value);
    }
    return arr;
  }, [] as Array<T>);
}
