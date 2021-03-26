# 深入了解 webpack 模块加载原理

### CommonJS规范
> webpack 自定义的模块化规范完美适配 CommonJS 规范

##### 执行顺序
* 主线程参数传入，参数是以路径为 key ，文件内容为函数体的键值对（{'path': function(){/* container*/}}）的模块函数
* 主线程最先运行入口文件 __webpack_require__('./src/index.js')。
* 检测是否有缓存，如果有则直接返回缓存的模块，如果没有则新建一个模块module，并放入缓存
* 执行文件对应路径的模块函数，如果改模块内部有调用 require方法来引入其他模块。则继续调用 __webpack_require__ 来加载新模块，流程与第三步相同，直到不在有新的模块需要加载
* 将这个新建的模块标注为已加载
* 执行完模块后，返回该模块的 exports 对象


### ES6 module
> webpack 处理 ES6 模块时，在模块函数中会不同于 CommonJS，并且会调用 __webpack_require__.d / .n / .r 三种方法

#### 执行顺序
* 主线程参数传入，参数是以路径为 key ，文件内容为函数体的键值对（{'path': function(){/* container*/}}）的模块函数
* 主线程最先运行入口文件 __webpack_require__('./src/index.js')。
* 检测是否有缓存，如果有则直接返回缓存的模块，如果没有则新建一个模块module，并放入缓存
* 执行模块函数，先给模块标注为 es6 模块(exports.__esModule = true)
* 将模块 export default a 赋值给  export.default = a。
* 调用 __webpack_require__.n 判断 esModule 是否为 true ，如果为 true，则返回 export['default']，否则返回 module

> 注：这里之所以会有 esModule 属性，是为了兼容CommonJS 和 ES6module 混用的情况



