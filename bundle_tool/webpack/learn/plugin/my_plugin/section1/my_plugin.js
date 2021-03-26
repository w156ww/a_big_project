

class Plugin {
    apply(compiler) {
        compiler.hooks.shouldEmit.tap('should', compilation => {
            console.log('shouldEmit')
            return true;
        })
        compiler.hooks.emit.tap('emit', compilation => {
            const filename = compiler.options.output.filename;
            const html =  
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="${filename}"></script>
</head>
<body>
    
</body>
</html>`
            compilation.assets['index.html'] = {
                source: () => html,
                size() {
                    return html.length
                }
            }
        })
    }
}





module.exports = Plugin