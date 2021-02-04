export abstract class OrderableArray<T> extends Array<T> {
  orders: ((t: T) => string | number)[];
}
