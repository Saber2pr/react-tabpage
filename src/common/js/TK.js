/*
 * @Author: AK-12 
 * @Date: 2018-10-18 06:49:42 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-10-18 06:54:24
 * @discribe: TK.push().to().to().pull() 
 */
export default (function Tk() {
  let _last = null
  return {
    to(foo, arg) {
      if (typeof foo === 'function') {
        _last = arg ? foo(arg) : foo(_last)
      }
      return this
    },
    cat() {
      console.log(_last)
      return this
    },
    push(value) {
      _last = value
      return this
    },
    pull() {
      return _last
    }
  }
})()