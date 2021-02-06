// References:
// https://dev.to/terabaud/i-created-and-my-first-typescript-library-and-published-it-on-npm-44c
// https://github.com/terabaud/ella-math

import {
  raf as requestAnimationFrame,
  caf as cancelAnimationFrame,
  root,
} from './request-animation-frame-polyfill'

export {
  requestAnimationFrame,
  cancelAnimationFrame
}

// Browser export as a global
root.requestAnimationFrame = requestAnimationFrame
root.cancelAnimationFrame = cancelAnimationFrame
