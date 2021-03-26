#### plugin
> 在 webpack 的整个编译周期中会触发很多不同的事件，`plugin` 可以监听这些事件，并且可以调用 webpack 的 API 对输出资源进行处理

desc：和 `loader` 不同，`loader` 一般只能对源文件代码进行转换，而 `plugin` 可以做的更多。`plugin` 在整个编译周期中都可以被调用，只要监听事件即可。
> 对于 webpack 编译，有两个重要的对象:`Compiler` 和 `Compilation`

> Compiler对象: 代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options, loader 和 plugin。当在 webpack环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 主环境。

> compilation 对象：代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

> 这两个组件是任何 webpack 插件不可或缺的部分（特别是 compilation），因此，开发者在阅读源码，并熟悉它们之后，会感到获益匪浅。



#### plugin 的实现
官方定义，webpack 插件由以下部分组成：
1. 一个js命名函数
2. 在插件函数的 prototype 上定义一个 apply 方法。
3. 指定一个绑定到 webpack 自身的事件钩子。
4. 处理 webpack 内部实力的特定数据
4. 功能完成后调用 webpack 提供的回调。

##### 示例

```javascript
// webpack v4 版本，通过监听 webpack 暴露出来的事件来触发。类似原生 addEventListener
class Plugin {
    apply(compiler) {
        compiler.plugin('should-emit', compilation => {
            console.log('should i emit?');
            return true;
        })
        compiler.plugin('emit', (compilation, callback) => {
            console.log('Have I reached here?')
            callback()
        })
    }
}
// webpack v5版本，webpack 将钩子全部放到 hooks 对象中，可以直接通过 compiler.hooks 进行监听。第一个参数是自定义事件名称，第二个参数为回调
class Plugin {
    apply(compiler) {
        // 不同事件回调的参数也不相同
        compiler.hooks.shouldEmit.tap('should', compilation => {
            console.log('shouldEmit')
            return true;
        })
        compiler.hooks.emit.tap('emit', compilation => {
            console.log('emit')
        })
    }
}
```
*tab 更换为 tapAsync 会转换为异步，回调函数中会有一个 callback 参数。当执行完毕后，需要调用 callback 来继续执行*

