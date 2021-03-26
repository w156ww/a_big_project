// 同步，参数 source 为源码，对源码处理后，即可直接返回
module.exports = function(source) {
    return source.replace(/var/g, 'const')
}