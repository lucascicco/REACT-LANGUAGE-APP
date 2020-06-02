const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            publicPath: '/dist/',
            filename: 'bundle.js'
        },
        module: {
            rules:  [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true 
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        }, 
        plugins: [
            CSSExtract
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: {
                index: '/'
            }
        }
};


