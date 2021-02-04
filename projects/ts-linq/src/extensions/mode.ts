export function mode<T>(this: Array<T>, func: (t: T) => number): number[] {
  if (!this.any()) {
    return [];
  }
  const groups = this.groupBy(_ => func(_));
  const max = Array.from(groups.keys())
    .map(key => groups.get(key).length)
    .max(_ => _);
  return Array.from(groups.keys()).filter(key => groups.get(key).length === max);
}
