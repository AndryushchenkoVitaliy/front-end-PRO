const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',

    output: {
        filename: 'js/bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            // JS + Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // SCSS → CSS
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            // Images
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ['mozjpeg', { quality: 75 }],
                            ['pngquant', { quality: [0.6, 0.8] }]
                        ]
                    }
                }
            })
        ]
    },

    watch: true,

    devServer: {
        static: './dist',
        port: 3000,
        open: true,
        hot: true
    }
};