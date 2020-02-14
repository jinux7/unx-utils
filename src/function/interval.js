/**
 * @desc 定时器循环的功能函数
 * @param { Function } 定时器的回掉函数，下面返回的函数的参数
 * @param { Number } 定时器的延迟时间，下面返回的函数的参数
 * @return { Function } 创建的循环执行定时器函数
 * @example 
 *  var nStart = document.getElementById('start-id'); // 开始按钮
    var nStop = document.getElementById('stop-id'); // 结束按钮
    var demo;
    nStart.addEventListener('click', function(ev) {
      if(demo) return;
      demo = interval();
      demo(function() {
        console.log(555);
      }, 1000);
    }, false);
    nStop.addEventListener('click', function(ev) {
      if(demo) demo.stop();
      demo = null;
    }, false);
 */

function interval() {
  var timer = true;
  var fn = function(callBack, timeout) {
    callBack();
    if(timer) {
      setTimeout(function() {
        fn(callBack, timeout);
      }, timeout);
    }
  }
  fn.stop = function() {
    timer = false;
  }
  return fn;
}

module.exports = interval;
