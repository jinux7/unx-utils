# unx-utils
javascript基础工具集合
## 模块功能划分
### array
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| arrayEqual  | 判断两个数组是否相等 | arrayEqual(arr1, arr2) |
| arrayEach  | 遍历数组操作 | arrayEach(arr, function(item, index) { })|
### object
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| isPlainObject  | 判断是否为纯粹的对象 | isPlainObject({name: 'mike'}) |
| assign  | assign函数 | assign(false, targetObj, obj1, obj2 [,obj3...]) |
| deepClone  | 深度克隆对象 | deepClone({name: 'mike', like: ['ball1','ball2','ball3']}) |
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
### bom
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| browser  | 获取浏览器的基本信息 | browser() |
### dom
|  工具函数名   | 功能  | 用法 |
|  ----  | ----  | ----  |
| domEval  | 动态的执行script代码 | domEval('alert(555)') |
| trigger  | 手动触发事件 | trigger(Element, 'click') |
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
## 关于测试
本项目的工具函数代码都会做单元测试，覆盖率争取达到95%以上。 

