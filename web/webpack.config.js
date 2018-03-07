const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const { WebPlugin } = require("web-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/pages/index.js"),
        // login: path.resolve(__dirname, "src/pages/login.js")
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "sass-loader"
                    ]
                }),
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024 * 30,
                            name: "assets/image/[name].[ext]"
                        }
                    }
                ],
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),
        // new WebPlugin({
        //     template: "./src/index.html",
        //     filename: "index.html"
        // }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html",
        //     filename: "login.html",
        //     chunks: ["login"]
        // })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        open: true
    }
}