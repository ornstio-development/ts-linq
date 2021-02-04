export function selectMany<T, U>(this: Array<T>[], func: (t: T, i: number) => U): Array<U> {
  return this.reduce((arr: Array<T>, t: Array<T>) => {
    return arr.concat(t);
  }, []).map((t, i) => func(t, i));
}
