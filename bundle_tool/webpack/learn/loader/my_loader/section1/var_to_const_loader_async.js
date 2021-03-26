// 异步 loader ，先调用 webpack 的 async 生成一个 callback，它的第一个参数是 error，这里可以设置为 null，第二个参数就是处理后的源码。当异步处理完源码后，调用 callback 即可。
module.exports = function(source) {
    const callback = this.async()

    setTimeout(() => {
        callback(null, `${source.replace(/;/g, '')}`)
    }, 3000)
}