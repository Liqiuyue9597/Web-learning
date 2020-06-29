function debounce(func, wait, isRun = false) {
  var timer
  return function () {
    const context = this
    const args = arguments[0]
    clearTimeout(timer)
    // isRun=true 立即执行doSomeThing
    if (isRun) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      
      if(callNow) func.call(context, args)
    } else {
      // 等待wait时间后执行doSomeThing
      timer = setTimeout(function () {
        // 修复doSomeThing的event事件和this指向问题
        func.call(context, args)
      }, wait)
    }
  }
}

var container = document.getElementById("container")

let count = 0
function doSomeThing(e) {
  container.innerHTML = ++count
}

// container.onmousemove = _.debounce(doSomeThing, 300)
container.onmousemove = debounce(doSomeThing, 1000)
