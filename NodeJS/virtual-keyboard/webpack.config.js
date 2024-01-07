const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    devtool: "source-map",
    // 개발환경이 기본 설정 : npm run build는 프로덕션으로 실행되어 번들링됨
    mode: "development",
    devServer: {
        // local env
        host: "localhost",
        // port is 3000
        port: 3000,
        // 프로젝트를 실행하면, 자동적으로 localhost:3000으로 브라우저가 열림
        open: true,
        // hot-reload : 개발환경에서 코드를 변경+저장하면, 자동으로 브라우저에 반영해줌
        watchFiles: "index.html",
    },
    // plugin은 두 가지를 사용 : html,css 처리를 위한 플러그인들
    // htmlWebpackPlugin : 모든 웹팩 번들을 포함하는 하나의 html파일을 생성 : title, template, inject, favicon 등등 설정
    plugins: [
        new HtmlWebpackPlugin({
            title: "keyboard",
            template: "./index.html",
            inject: "body",
            favicon: "./favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }
}