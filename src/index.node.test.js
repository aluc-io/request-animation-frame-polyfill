const { requestAnimationFrame, cancelAnimationFrame } = require('../lib/request-animation-frame-polyfill')

let idHello, idHi
const hello = (time) => {
  console.log('hello:' + time)
  idHello = requestAnimationFrame(hello)
}

const hi = (time) => {
  console.log('hi:' + time)
  idHi = requestAnimationFrame(hi)
}
requestAnimationFrame(hello)
requestAnimationFrame(hi)

setTimeout( () => cancelAnimationFrame(idHello), 100)
setTimeout( () => cancelAnimationFrame(idHi), 200)
