import { requestAnimationFrame, cancelAnimationFrame } from '../dist/request-animation-frame-polyfill.esm'

let idHello: number
let idHi: number
const hello = (time: number) => {
  console.log('hello:' + time)
  idHello = requestAnimationFrame(hello)
}

const hi = (time: number) => {
  console.log('hi:' + time)
  idHi = requestAnimationFrame(hi)
}
requestAnimationFrame(hello)
requestAnimationFrame(hi)

setTimeout( () => cancelAnimationFrame(idHello), 100)
setTimeout( () => cancelAnimationFrame(idHi), 200)
