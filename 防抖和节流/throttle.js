//第一次直接触发，最后不触发
function throttle(func, wait){
  let prev=0, cur
  const context = this
  const args = arguments[0]
  return function(){
    cur = Date.now()
    if(cur - prev > wait){
      prev = cur
      func.call(context, args)
    }
  }
}

//第一次不触发，最后一次触发
// function throttle(func, wait){
//   let context, args, timer

//   return function(){
//     context = this
//     args = arguments[0]
//     if(!timer){
//       timer = setTimeout(function(){
//         timer = null
//         func.call(context, args)
//       }, wait)
//     }
//   }
// }



var container = document.getElementById("container")

let count = 0
function doSomeThing() {
  container.innerHTML = ++count
}

// container.onmousemove = _.throttle(doSomeThing, 2000, {
//   leading: true,
//   trailing: false
// })
container.onmousemove = throttle(doSomeThing, 2000)