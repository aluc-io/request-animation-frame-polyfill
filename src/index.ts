/**
 * Thanks for following contributor of codes
 * https://gist.github.com/1866474
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/requestAnimationFrame/polyfill.js
**/

let uId = 1
const uniqueId = () => uId++

// We use `self` instead of `window` for `WebWorker` support.
const root: any = (typeof self === 'object' && self.self == self) ? self
  : (typeof global === 'object' && global.global == global) ? global
  : {}

const nowOffset = Date.now();

// use performance api if exist, otherwise use Date.now.
// Date.now polyfill required.
export const pnow = (): number => {
  if (root.performance && typeof root.performance.now === 'function') {
    return root.performance.now()
  }

  // fallback
  return Date.now() - nowOffset
}

interface IReservedCBs {
  [key: string]: Function
}

let lastTime = Date.now()

let reservedCBs: IReservedCBs = {}

const polyfillRaf = (callback: Function) => {
  if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}

  const currentTime = Date.now()
  const gap = currentTime - lastTime
  const delay = gap > 16 ? 0 : 16 - gap

  const id = Number(uniqueId())
  reservedCBs[id] = callback

  // keys(reservedCBs).length > 1 의미는 이미 setTimeout 이 걸려있는 경우.
  // 함께 callback 이 실행될 수 있게 reservedCBs 에만 추가해주고 return
  if (Object.keys(reservedCBs).length > 1) return id

  setTimeout( () => {
    lastTime = currentTime
    const copied = reservedCBs
    reservedCBs = {}

    Object.keys(copied)
      .forEach((key: string) => copied[key](pnow()))

  }, delay)

  return id
}

const polyfillCaf = (id: number) => {
  delete reservedCBs[id]
}

const vendorPrefixArr = ['','webkit','moz','ms','o']
const nameArr = vendorPrefixArr.map( vp => {
  return vp === ''
    ? { raf: 'requestAnimationFrame', caf: 'cancelAnimationFrame' }
    : { raf: vp+'RequestAnimationFrame', caf: [vp+'CancelAnimationFrame',vp+'CancelRequestAnimationFrame'] }
})

const idx = nameArr.findIndex(({ raf }) => root[raf])

type TRequestAnimationFrame = (callback: Function) => number
type TCancelAnimationFrame = (id: number) => void
export const requestAnimationFrame: TRequestAnimationFrame = idx > -1
  ? root[nameArr[idx].raf]
  : polyfillRaf

export const cancelAnimationFrame: TCancelAnimationFrame = idx > -1
  ? root[nameArr[idx].caf[0]] || root[nameArr[idx].caf[1]]
  : polyfillCaf

// Browser export as a global
// https://github.com/JayPuff/seven-tween/blob/master/src/seven-tween.js
if(typeof window !== 'undefined') {
  root.requestAnimationFrame = requestAnimationFrame
  root.cancelAnimationFrame = cancelAnimationFrame
}

const rafCaf = { requestAnimationFrame, cancelAnimationFrame }

// Node Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = rafCaf
}
