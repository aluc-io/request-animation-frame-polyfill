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

/*
 * Below 4 methods should be available on consumer side:
 *
 * <script src="https://.../index.umd.min.js"></script>
 * requestAnimationFrame, cancelAnimationFrame
 *
 * const {requestAnimationFrame, cancelAnimationFrame} require('request-animation-frame-polyfill')
 * const rafp require('request-animation-frame-polyfill')
 * rafp.requestAnimationFrame, rafp.cancelAnimationFrame
 *
 * import rafp from 'request-animation-frame-polyfill'
 * rafp.requestAnimationFrame, rafp.cancelAnimationFrame
 *
 * import {requestAnimationFrame, cancelAnimationFrame} from 'request-animation-frame-polyfill'
 * import * as rafp from 'request-animation-frame-polyfill'
 * rafp.requestAnimationFrame, rafp.cancelAnimationFrame
*/
