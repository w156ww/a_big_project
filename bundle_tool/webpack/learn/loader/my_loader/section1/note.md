#### loader
> loader 是一个转换器，用于对源码进行转换

desc: 例如 `babel-loader` 可以将 `ES6` 转换为 `ES5` 代码； `sass-loader` 将 `sass`代码转换为 `css` 代码

##### 同步
```javascript
// 同步，参数 source 为源码，对源码处理后，即可直接返回
module.exports = function(source) {
    return source.replace(/var/g, 'const')
}
```

##### 异步
```javascript
// 异步 loader ，先调用 webpack 的 async 生成一个 callback，它的第一个参数是 error，这里可以设置为 null，第二个参数就是处理后的源码。当异步处理完源码后，调用 callback 即可。
module.exports = function(source) {
    const callback = this.async()
    
    setTimeout(() => {
        callback(null, `${source.replace(/;/g, '')}`)
    }, 3000)
}
```
