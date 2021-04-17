/*
    延时执行
    @param fn function
    @param wait number
    @return function
*/
export function debounce(fn, wait) {
  var timeout = null;
  return function() {
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
  }
}
