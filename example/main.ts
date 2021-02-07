import {requestAnimationFrame, cancelAnimationFrame} from '../'
import * as wildcardRafp from '../'
const required = require('../')

console.log(Object.keys(wildcardRafp))               // should be undefined
console.log(wildcardRafp.cancelAnimationFrame)  // should be function
console.log(required.cancelAnimationFrame)   // should be function

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
