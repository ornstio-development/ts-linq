# @ornstio/ts-linq

Adds LINQ-like typed extensions to Typescript arrays
[https://ts-linq.ornstio.com/](https://ts-linq.ornstio.com/)
[https://www.npmjs.com/package/@ornstio/ts-linq](https://www.npmjs.com/package/@ornstio/ts-linq)

## Installation

```shell
$ npm i @ornstio/ts-linq
```

## Usage

Add the following lines to main.ts:

```shell
import { tsLinq } from "@ornstio/ts-linq";
tsLinq();
```

## Examples

any

```shell
[0, 1].any((_) =>  _ === 0)
= true
```

except

```shell
const  arr = [{ x:  0 }, { x:  1 }, { x:  2 }];
arr.except([{ x:  0 }, { x:  1 }, { x:  3 }], (a, b) =>  a.x === b.x);
= [{x:2},{x:3}]
```
