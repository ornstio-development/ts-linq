import { OrderableArray } from '../types/orderable-array';
import { any } from './any';
import { first } from './first';
import { select } from './select';
import { groupBy } from './groupBy';
import { selectMany } from './selectMany';
import { intersperse } from './intersperse';
import { all } from './all';
import { sum } from './sum';
import { min } from './min';
import { max } from './max';
import { average } from './average';
import { median } from './median';
import { mode } from './mode';
import { intersect } from './intersect';
import { except } from './except';
import { distinct } from './distinct';
import { last } from './last';
import { take } from './take';
import { skip } from './skip';
import { skipWhile } from './skipWhile';
import { takeWhile } from './takeWhile';
import { toDictionary } from './toDictionary';
import { toMap } from './toMap';
import { orderBy } from './orderBy';
import { thenBy } from './thenBy';
import { insertAt } from './insertAt';
import { remove } from './remove';
import { removeWhere } from './removeWhere';
import { removeAt } from './removeAt';
import { innerJoin } from './innerJoin';
import { leftJoin } from './leftJoin';
import { location } from './location';

export {};

declare global {
  interface Array<T> {
    any(this: Array<T>, func?: (t: T, i: number) => boolean): boolean;
    all(this: Array<T>, func?: (t: T, i: number) => boolean): boolean;
    first(this: Array<T>, func?: (t: T, i: number) => boolean): T;
    select<T, U>(this: Array<T>, func: (t: T, i: number) => U): Array<U>;
    groupBy<T, U>(this: Array<T>, func: (t: T, i: number) => U): Map<U, Array<T>>;
    selectMany<T, U>(this: Array<T>[], func: (t: T, i: number) => U): Array<U>;
    intersperse(this: Array<T>, value: T): Array<T>;
    sum(this: Array<T>, func: (t: T) => number): number;
    min(this: Array<T>, func: (t: T) => number): number;
    max(this: Array<T>, func: (t: T) => number): number;
    average(this: Array<T>, func: (t: T) => number): number;
    median(this: Array<T>, func: (t: T) => number): number;
    mode(this: Array<T>, func: (t: T) => number): number[];
    intersect(this: Array<T>, arr: Array<T>, func?: (a: T, b: T) => boolean): Array<T>;
    except(this: Array<T>, arr: Array<T>, func?: (a: T, b: T) => boolean): Array<T>;
    distinct(this: Array<T>, func?: (a: T, b: T) => boolean): Array<T>;
    last(this: Array<T>, func?: (t: T, i: number) => boolean): T;
    take(this: Array<T>, count: number): Array<T>;
    skip(this: Array<T>, count: number): Array<T>;
    skipWhile(this: Array<T>, func: (t: T) => boolean): Array<T>;
    takeWhile(this: Array<T>, func: (t: T) => boolean): Array<T>;
    toDictionary(this: Array<T>, func?: (t: T, i: number) => string): { [key: string]: T };
    toMap<U>(this: Array<T>, func?: (t: T, i: number) => U): Map<U, T>;
    orderBy(this: Array<T>, sort: (t: T) => string | number): OrderableArray<T>;
    thenBy(this: OrderableArray<T>, func: (t: T) => number | string): OrderableArray<T>;
    insertAt(this: Array<T>, index: number, ...values: T[]): void;
    remove(this: Array<T>, value: T): void;
    removeWhere(this: Array<T>, func: (t: T, i: number) => boolean): void;
    removeAt(this: Array<T>, index: number): void;
    innerJoin<U, V, W>(
      this: Array<T>,
      inner: U[],
      innerKey: (t: T) => V,
      outerKey: (u: U) => V,
      selector: (a: T, b: U) => W,
      func?: (a: V, b: V) => boolean
    ): W[];
    leftJoin<U, V, W>(
      this: Array<T>,
      inner: U[],
      outerKey: (t: T) => V,
      innerKey: (u: U) => V,
      selector: (a: T, b: U) => W,
      func?: (a: V, b: V) => boolean
    ): W[];
    location(this: Array<T>, func: (a: T) => boolean): number;
  }
}

Array.prototype.any = any;
Array.prototype.all = all;
Array.prototype.first = first;
Array.prototype.select = select;
Array.prototype.groupBy = groupBy;
Array.prototype.selectMany = selectMany;
Array.prototype.intersperse = intersperse;
Array.prototype.sum = sum;
Array.prototype.min = min;
Array.prototype.max = max;
Array.prototype.average = average;
Array.prototype.median = median;
Array.prototype.mode = mode;
Array.prototype.intersect = intersect;
Array.prototype.except = except;
Array.prototype.distinct = distinct;
Array.prototype.last = last;
Array.prototype.take = take;
Array.prototype.skip = skip;
Array.prototype.skipWhile = skipWhile;
Array.prototype.takeWhile = takeWhile;
Array.prototype.toDictionary = toDictionary;
Array.prototype.toMap = toMap;
Array.prototype.orderBy = orderBy;
Array.prototype.thenBy = thenBy;
Array.prototype.insertAt = insertAt;
Array.prototype.remove = remove;
Array.prototype.removeWhere = removeWhere;
Array.prototype.removeAt = removeAt;
Array.prototype.innerJoin = innerJoin;
Array.prototype.leftJoin = leftJoin;
Array.prototype.location = location;
