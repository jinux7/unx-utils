# unx-utils
javascript基础工具集合
## 模块功能划分
### array
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| arrayEqual  | 判断两个数组是否相等 | arrayEqual(arr1, arr2) |
| arrayEach  | 遍历数组操作 | arrayEach(arr, function(item, index) { })|
| arrFlat2complex  | 将一维数组转为二维数组 | arrFlat2complex([1,2,3,4], 2) |
### object
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| isPlainObject  | 判断是否为纯粹的对象 | isPlainObject({name: 'mike'}) |
| assign  | assign函数 | assign(false, targetObj, obj1, obj2 [,obj3...]) |
| deepClone | 深度克隆对象 | deepClone({name: 'mike', like: ['ball1','ball2','ball3']}) |
| isEmptyObject | 判断参数是否为空 | isEmptyObject({}) |
### cookie
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| setCookie  | 设置cookie | setCookie('test', 'value', new Date('2035-12-25') |
| getCookie  | 获取cookie | getCookie('test') |
| removeCookie  | 删除cookie | removeCookie('test') |
### url
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| urlQuery2Object  | 解析url的参数以对象的形式返回 | urlQuery2Object(url) |
| object2UrlQuery  | 将一个对象转成name=mike&age=6这种url参数字符串 | object2UrlQuery(obj) |
### type
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| toType | 返回所传参数的类型 | toType('type') |
### bom
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| browser  | 获取浏览器的基本信息 | browser() |
| ajax  | ajax请求函数 | [见这里](https://github.com/jinux7/jinux-ajax/tree/master/public/test) |
### dom
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| domEval  | 动态的执行script代码 | domEval('alert(555)') |
| trigger  | 手动触发事件 | trigger(Element, 'click') |
| getStyle  | 获取元素的样式值 | getStyle(document.body, 'fontSize') |
| getTopLeftInBody  | 获取元素距离body左上角的距离 | getTopLeftInBody(document.getElementById('idName')) |
| parseHTML  | 根据html字符串片段解析dom对象 | parseHTML('<div>hello world</div>') |
| hasClassName  | 判断元素是否包含此类名 | hasClassName(ele, 'content') |
| addClassName  | 给元素添加一个类名 | addClassName(ele, 'content') |
| removeClassName  | 删除元素上的一个类名 | removeClassName(ele, 'content') |
| isParentNode  | 判断两个元素节点是否为父子关系,childNode子节点，parentNode父辈节点，flag区分是父节点还是父辈节点 | isParentNode(childNode, parentNode, flag) |
### string
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| price2chinese  | 将数字价格转换为大写中文 | price2chinese(66666.66) |
### date
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| getRangeDate  | 获取今天，本周，本月的区间日期 | 1)getRangeDate('today')<br/>2)getRangeDate('week')<br/>3)getRangeDate('month')<br/> |
| date2string  | 获取日期的格式化字符串 | 1)date2string()<br/>2)date2string(new Date())<br/>3)date2string('\~')<br/>4)date2string(true)<br/>5)date2string(new Date(),'\~')<br/>6)date2string(new Date(),true)<br/>7)date2string('\~',true)<br/>8)date2string(new Date(),'\~',true) |
### random
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| randomNum  | 获取区间范围内的随机数 | randomNum(2,10,true)<br/>randomNum(2,10,false) |
| randomColor  | 获取一个随机的颜色 | randomColor() |
### function
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| debounce  | 防抖，不会连续的触发，超过设定的时间时才会触发 | debounce(function() {}, 500) |
| throttle  | 节流，在设定的时间范围连续调用执行 | throttle(function() {}, 500) |
| curry  | 包装成柯里化函数 | curry(fn)(arg1)(arg2)(arg3) |
| compose  | 以柯里化函数为参数，从右向左管道式的执行 | compose(curryFn1,curryFn2,curryFn3)('fn3arg') |
| interval  | 循环定时器，类似与原生setInterval | var demo = interval();<br/>demo(function() {console.log(555);}, 1000);<br/>demo.stop(); |
## 关于测试
本项目的工具函数代码都会做单元测试，覆盖率争取达到95%以上。 

