import { OrderableArray } from '../types/orderable-array';

function sortThenBy<T>(arr: Array<T>, orders: ((t: T) => string | number)[]): Array<T> {
  orders = Object.assign([], orders);
  const order = orders.shift();
  if (orders.length === 0) {
    return arr.orderBy(order);
  } else {
    return Array.from(arr.groupBy(order).values()).reduce(
      (a, value) => a.concat(sortThenBy(value, Object.assign([], orders))),
      []
    );
  }
}

export function thenBy<T>(this: OrderableArray<T>, func: (t: T) => number | string): OrderableArray<T> {
  this.orders.push(func);
  const sorted = sortThenBy(this, this.orders) as OrderableArray<T>;
  sorted.orders = this.orders;
  return sorted;
}
