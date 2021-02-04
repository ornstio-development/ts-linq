export function leftJoin<T, U, V, W>(
  this: Array<T>,
  inner: U[],
  outerKey: (t: T) => V,
  innerKey: (u: U) => V,
  selector: (a: T, b: U) => W,
  func?: (a: V, b: V) => boolean
): W[] {
  return this.map((t: T) => {
    return { t, u: inner.first(u => (func ? func(outerKey(t), innerKey(u)) : outerKey(t) === innerKey(u))) };
  }).map(value => selector(value.t, value.u));
}
