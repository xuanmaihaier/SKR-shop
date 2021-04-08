/*
    节流函数
    @param fn function
    @param wait number
    @param maxTimeLong number
    @return function
*/
function throttling(fn, wait, maxTimelong) {
  var timeout = null,
      startTime = Date.parse(new Date);

  return function() {
      if(timeout !== null) clearTimeout(timeout);
      var curTime = Date.parse(new Date);
      if(curTime-startTime>=maxTimelong) {
          fn();
          startTime = curTime;
      } else {
          timeout = setTimeout(fn, wait);
      }
  }
}