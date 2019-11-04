# request-animation-frame-polyfill
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

## Build & Test

Build:
```shell
$ yarn install
$ npx babel src/index.ts > lib/request-animation-frame-polyfill.js
```

Test:
```shell
$ yarn test
```

## Deploy

```shell
$ npm login
$ npm publish
```
