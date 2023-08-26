const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: process.env.NODE_ENV || 'development',
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.(c|sa|sc)ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devServer: {
            port: 3000,
            historyApiFallback: true,
            open: true
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
        ],
    }
};