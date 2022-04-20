const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    name:'react-project',
    mode:'development', //
    devtool:'eval',

    // 확장자나 파일 제거
    resolve:{
        extensions:['.js','.jsx','.css']
    },

    // 내가 앞으로 번들할 파일들.
    entry:{
        app:['./src/index'] 
    },

    module:{
        rules:[{
            test:/\.jsx?/,
            loader: 'babel-loader', // webpack과 babel을 연결해주는 babel 라이브러리
            options:{
                // presets:['@babel/preset-env','@babel/preset-react']
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['last 2 chrome versions','> 5% in KR'] // browserslist
                        },
                        debug:true,
                    }], // 옛날 브라우저에서도 환경에 맞게 실행해주는애.
                    '@babel/preset-react' // JSX를 사용하기 위해.
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader'] // typescript 
        }]
    },
    // const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
    // npm install -D react-refresh
    plugins:[
        new webpackPlugin(),
        new MiniCssExtractPlugin({ filename:'style.css' }) 
    ],

    // 내보낼 파일의 위치와 파일명.
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath:'/dist',
    },

    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },

        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    } // public 디렉토리만들어서 거기에다가 html까지 넣고 실행해보기.
    // http://localhost:3000

}
