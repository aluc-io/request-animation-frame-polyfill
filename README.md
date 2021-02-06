# request-animation-frame-polyfill

[![npm version](https://badge.fury.io/js/request-animation-frame-polyfill.svg)](https://badge.fury.io/js/request-animation-frame-polyfill)

`requestAnimationFrame` polyfill library for nodejs and old browsers.

## Install

```
$ yarn add request-animation-frame-polyfill
```

## Usage

```typescript
import { requestAnimationFrame, cancelAnimationFrame } from 'request-animation-frame-polyfill'

let id: number
const hello = (time: number) => {
  console.log('hello:' + time)
  id = requestAnimationFrame(hello)
}

id = requestAnimationFrame(hello)
setTimeout( () => cancelAnimationFrame(id), 100)
```

## Build

Build:
```shell
$ yarn build
```

## Example

```
$ cd example
$ npx rollup -c
$ node index.esm.js
```

## Deploy

```shell
$ npm login
$ npm publish
```
