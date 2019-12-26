/**
 * 节流函数
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 */
export function throtte(fn, delay) {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
/**
 * 防抖函数
 * @param {*} fn 回调函数
 * @param {*} delay 延迟时间
 */
export function debounce(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}