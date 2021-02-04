export function toDictionary<T>(this: Array<T>, func?: (t: T, i: number) => string): { [key: string]: T } {
  return this.reduce((obj, value, i) => {
    obj[func(value, i)] = value;
    return obj;
  }, {} as { [key: string]: T });
}
