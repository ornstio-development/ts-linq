import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly menuItems: { [name: string]: MenuItem[] } = {
    github: [
      {
        name: 'ornstio-development',
        description:
          '<a href="https://github.com/ornstio-development/ts-linq">https://github.com/ornstio-development/ts-linq</a>',
      },
    ],
    installation: [
      {
        name: 'npm',
        description: '<b>npm i @ornstio/ts-linq</b>',
      },
    ],
    usage: [
      {
        name: 'angular',
        description:
          'Add the following lines to main.ts:\n\n<b>import { tsLinq } from "@ornstio/ts-linq";\ntsLinq();</b>',
      },
    ],
    array: [
      {
        name: 'any',
        description: 'Returns if a single element matching the lambda expression exists in the array',
        funcs: [
          () => {
            return [{ x: 0 }, { x: 1 }, { x: 2 }].any(_ => _.x === 0);
          },
          () => {
            return [].any();
          },
        ],
      },
      {
        name: 'all',
        description: 'Returns if all elements of the array match the lambda expression ',
        funcs: [
          () => {
            return [0].all();
          },
          () => {
            return [].all();
          },
          () => {
            return [{ x: 1 }, { x: 2 }].all(_ => _.x === 1);
          },
          () => {
            return [0, 1].all(_ => _ < 2);
          },
        ],
      },
      {
        name: 'average',
        description: 'Averages the result of the lambda expression',
        funcs: [
          () => {
            return [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].average(_ => _.x);
          },
          () => {
            return [].average(_ => _);
          },
        ],
      },
      {
        name: 'distinct',
        description: 'Returns a distinct array based on the equality lambda function',
        funcs: [
          () => {
            return JSON.stringify([0, 0, 1, 2, 2].distinct());
          },
          () => {
            return JSON.stringify([{ x: 1 }, { x: 2 }, { x: 1 }].distinct((a, b) => a.x === b.x));
          },
        ],
      },
      {
        name: 'except',
        description: 'Returns an array of all elements that do not match the lambda expression',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2].except([2, 1], (a, b) => a === b));
          },
        ],
      },
      {
        name: 'first',
        description: 'Returns the first element of an array that matches the lambda expression',
        funcs: [
          () => {
            return [0, 1, 2].first(_ => _ > 1);
          },
          () => {
            return [0, 1, 2].first();
          },
        ],
      },
      {
        name: 'groupBy',
        description:
          'Groups the array into a Map of key U with value T[] provided by the lambda expression\n Note: Value cannot be displayed',
        funcs: [
          () => {
            return JSON.stringify([{ x: 1 }, { x: 2 }, { x: 1 }].groupBy(_ => _.x));
          },
        ],
      },
      {
        name: 'intersect',
        description: 'Returns elements from two arrays that overlap based on lambda expression',
        funcs: [
          () => {
            return JSON.stringify([{ x: 1 }, { x: 2 }].intersect([{ x: 2 }, { x: 3 }], (a, b) => a.x === b.x));
          },
        ],
      },
      {
        name: 'intersperse',
        description: 'Inserts provided element between each element of an array',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2].intersperse(5));
          },
        ],
      },
      {
        name: 'last',
        description: 'Return the last element in the array that matches the lambda expression',
        funcs: [
          () => {
            return [0, 1, 2].last();
          },
          () => {
            return JSON.stringify([{ x: 1 }, { x: 2 }, { x: 3 }].last(_ => _.x === 2));
          },
        ],
      },
      {
        name: 'max',
        description: 'Returns the maximum value of an array based on lambda expression',
        funcs: [
          () => {
            return [5, 4, 3].max(_ => _);
          },
          () => {
            return [{ x: 3 }, { x: 4 }].max(_ => _.x);
          },
        ],
      },
      {
        name: 'min',
        description: 'Returns the minimum value of an array based on lambda expression',
        funcs: [
          () => {
            return [5, 4, 3].min(_ => _);
          },
          () => {
            return [{ x: 3 }, { x: 2 }].min(_ => _.x);
          },
        ],
      },
      {
        name: 'median',
        description: 'Returns the median value of an array based on lambda expression',
        funcs: [
          () => {
            return [0, 1, 2, 3].median(_ => _);
          },
          () => {
            return [{ x: 1 }, { x: 4 }, { x: 2 }].median(_ => _.x);
          },
        ],
      },
      {
        name: 'mode',
        description: 'Returns the mode(s) of an array based on lambda expression',
        funcs: [
          () => {
            return JSON.stringify([0, 0, 1, 2].mode(_ => _));
          },
          () => {
            return JSON.stringify([0, 0, 1, 2, 1].mode(_ => _));
          },
        ],
      },
      {
        name: 'orderBy',
        description: 'Sorts the array based on the lambda expression',
        funcs: [
          () => {
            return JSON.stringify(['a', 'c', 'd'].orderBy(_ => _));
          },
          () => {
            return JSON.stringify([{ x: 0 }, { x: 2 }, { x: 1 }].orderBy(_ => _.x));
          },
        ],
      },
      {
        name: 'select',
        description: 'Returns array of type U based on lambda expression',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2].select(_ => ({ x: _ })));
          },
        ],
      },
      {
        name: 'selectMany',
        description: 'Flattens array of type T[][] into array of type T[]',
        funcs: [
          () => {
            return JSON.stringify(
              [
                [0, 1],
                [2, 3],
              ].selectMany(_ => _)
            );
          },
        ],
      },
      {
        name: 'skip',
        description: 'Returns array after skipping provided number of values',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2, 3].skip(2));
          },
        ],
      },
      {
        name: 'skipWhile',
        description: 'Returns array after skipping values until lambda expression is not satisfied',
        funcs: [
          () => {
            return JSON.stringify([0, 0, 0, 1, 2, 0].skipWhile(_ => _ < 1));
          },
        ],
      },
      {
        name: 'sum',
        description: 'Sums the values of an array provided by lambda expression',
        funcs: [
          () => {
            return [0, 1, 2, 3].sum(_ => _), () => [{ x: 0 }, { x: 2 }, { x: 1 }, { x: 3 }].sum(_ => _.x);
          },
        ],
      },
      {
        name: 'take',
        description: 'Returns an array of length of the provided value starting from the first element',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2, 3].take(2));
          },
        ],
      },
      {
        name: 'takeWhile',
        description:
          'Returns an array of values until lambda expression is not satisfied starting from the first element',
        funcs: [
          () => {
            return JSON.stringify([0, 1, 2, 3, 4, 0].takeWhile(_ => _ < 3));
          },
        ],
      },
      {
        name: 'thenBy',
        description: 'Chain sorts an array of values after calling orderBy',
        funcs: [
          () => {
            return JSON.stringify(
              [
                { x: 1, y: 2 },
                { x: 2, y: 1 },
                { x: 1, y: 1 },
                { x: 2, y: 2 },
              ]
                .orderBy(_ => _.x)
                .thenBy(_ => _.y)
            );
          },
        ],
      },
      {
        name: 'toDictionary',
        description: 'Converts an array into a dictionary with keys of string/number based on lambda expression',
        funcs: [
          () => {
            return JSON.stringify(
              [
                { x: 'A', y: 1 },
                { x: 'B', y: 2 },
              ].toDictionary(_ => _.x)
            );
          },
        ],
      },
      {
        name: 'toMap',
        description: 'Converts an array into a map based on lambda expression\nNote: Value cannot be displayed',
        funcs: [() => JSON.stringify([{ x: 1 }].toMap(_ => _))],
      },
      {
        name: 'remove',
        description: 'Remove a value from an array',
        funcs: [
          () => {
            const arr = [{ x: 0 }, { x: 1 }];
            arr.remove({ x: 1 });
            return JSON.stringify(arr);
          },
        ],
      },
      {
        name: 'insertAt',
        description: 'Inserts value(s) into an array at a given index',
        funcs: [
          () => {
            const arr = [0, 1, 2];
            arr.insertAt(1, 3, 4);
            return JSON.stringify(arr);
          },
        ],
      },
      {
        name: 'removeAt',
        description: 'Remove value at given index',
        funcs: [
          () => {
            const arr = [0, 1, 2];
            arr.removeAt(1);
            return JSON.stringify(arr);
          },
        ],
      },
      {
        name: 'removeWhere',
        description: 'Remove value(s) that match the lambda expression',
        funcs: [
          () => {
            const arr = [0, 1, 2];
            arr.removeWhere(_ => _ > 0);
            return JSON.stringify(arr);
          },
        ],
      },
      {
        name: 'leftJoin',
        description: 'Left joins two arrays given provided key values and allows manipulation of matching elements',
        funcs: [
          () => {
            const a = [{ x: 1 }, { x: 2 }, { x: 3 }];
            const b = [{ x: 1 }, { x: 3 }, { x: 4 }];
            return JSON.stringify(
              a.leftJoin(
                b,
                _ => _.x,
                _ => _.x,
                (a1, b1) => b1?.x,
                (a1, b1) => a1 === b1
              )
            );
          },
        ],
      },
      {
        name: 'innerJoin',
        description: 'Inner joins two arrays given provided key values and allows manipulation of matching elements',
        funcs: [
          () => {
            const a = [{ x: 1 }, { x: 2 }, { x: 3 }];
            const b = [{ x: 1 }, { x: 3 }, { x: 4 }];
            return JSON.stringify(
              a.innerJoin(
                b,
                _ => _.x,
                _ => _.x,
                (a1, b1) => b1?.x,
                (a1, b1) => a1 === b1
              )
            );
          },
        ],
      },
      {
        name: 'location',
        description: 'Finds the first index of a value in the array based on the lambda expression',
        funcs: [
          () => {
            return [{ x: 1 }, { x: 2 }, { x: 3 }].location(_ => _.x === 2);
          },
        ],
      },
    ].orderBy(_ => _.name),
  };

  constructor() {}
}
