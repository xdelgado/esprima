const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry:  path.resolve(__dirname, 'src/esprima'),
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: "esprima.js",
        libraryTarget: "umd",
        library: "esprima"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
              test: /\.tsx?$/, 
              loader: "awesome-typescript-loader" 
            },
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
}
