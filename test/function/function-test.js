const assert = require('assert');
const fnModule = require('../../src/function/index');

describe('#function.js', () => {
    describe('#function()', () => {
        // 使用done方式完成异步的测试
        it('debounce() should run function delay sometime', (done) => {
          let num = 0, interTimeId = null, index = 0;
          let debounceFn = fnModule.debounce(function() {
            num++;
          }, 150);
          // 80ms一次条用debounceFn函数，内部机制是超过150ms才执行，所以一直在防抖，只有最后一次才执行
          let testFn = function() {
            setTimeout(function() {
              index++;
              debounceFn();
              if(index<3) {
                testFn()
              }
            }, 80);
          }
          testFn();
          setTimeout(function() {
            if(num===1) {
              done();
            }else {
              done('debounce-error');
            }
          }, 1000);
        });
        // 使用done方式完成异步的测试
        it('throttle() should run function in sometime', (done) => {
          let num = 0, interTimeId = null, index = 0;
          let throttleFn =  fnModule.throttle(function() {
            num++;
          }, 100);
          let testFn = function() {
            setTimeout(function() {
              index++;
              throttleFn();
              if(index<=10) {
                testFn()
              }
            }, 50);
          }
          testFn();
          setTimeout(function() {
            if(num===6) {
              done();
            }else {
              done('debounce-error');
            }
          }, 1000);
        });
        // curry
        it('curry should return a curry function', () => {
          var fn = function(a,b,c) {
            return a+b+c;
          }
          var _fn = fnModule.curry(fn);
          assert.strictEqual(_fn(1)(2)(3), fn(1,2,3));
        });
        // compose
        it('compose should compose curry functions', () => {
          var fn1 = function(a) {
            return a*10;
          }
          var fn2 = function(a) {
            return a*100;
          }
          var _fn1 = fnModule.curry(fn1);
          var _fn2 = fnModule.curry(fn2);
          var conposeFn = fnModule.compose(_fn1, _fn2);
          assert.strictEqual(conposeFn(2), 2000);
        });
    });  
});