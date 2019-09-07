//!ATENCION -> THE PRODUCTION MODE IS CARRIES ALL THE CONFIGURATION EXCEPT FOR THE TERSER PLUGIN BECAUSE COMES BY DEFAULT

const path = require('path')
//!In PRODUCTION MODE the TerserPlugin comes by default so it is not NECESSARY
//TODO const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //That is the entry point of the app. The first file it will check and then check the other files inside
    entry: './src/index.js',
    //It is the options of how your built app will look like
    output: {
        //Here we can give the output file a name.
        //The browser caches the files that it downloaded for the first time so it will not need to download them again if you refresh the page
        //In case of refresh it will always use the file in the cache to show the web page, but if you change a JS file, the browser will not see because of the cache.
        //For that we use the [contenthash] so webpack sends the new version of the file in case of a page refresh
        filename: 'bundle.[contenthash].js',
        //This is the path in which will contains all the build files.changes
        //IT MUST BE AN ABSOLUTE PATH. That is why we use the path library
        path: path.resolve(__dirname, './dist'),
        //It is a path to inform WEBpack where are our ASSETS (images and videos)
        publicPath: ''
    },
    //This sets if you are on PRODUCTION MODE or DEVELOPMENT MODE
    //After you run build in a production mode any error will be SHOWN in  the bundle.js file 
    //After you run build in a development mode any error will be SHOWN in the original file 
    mode: 'production',
    //For different types of files WEBPACK needs a specific LOADER. There for it needs a set of rules to aply the loaders.
    module: {
        rules: [
            {
                //This is a loader to build images. In this cases accepts only .pgn and .jpg
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                //This is a CSS loader
                test: /\.css$/,
                use: [
                    //! ATENÇÃO - Webpack reads the loader from RIGHT to LEFT
                    //In this case we are using a PLUGIN to minify the css file
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                //This is a SCSS loader with the same minify plugin
                test: /\.scss$/,
                use: [
                    //! ATENÇÃO - Webpack reads the loader from RIGHT to LEFT
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                //This is a loader to build the latest EcmaScript rules through the BABEL loader
                test: /\.js$/,
                //Does not apply to node modules folder
                exclude: /node_modules/,
                //Any loader can have an options object, because we have only 1 loader we did not used the array
                use: {
                    //! ATENÇÃO - Webpack reads the loader from RIGHT to LEFT
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    //The plugins are used to do something that the loaders CAN NOT DO
    plugins: [
        //This plugin minify the JS files
        //!In PRODUCTION MODE the TerserPlugin comes by default so it is not NECESSARY
        //TODO new TerserPlugin(),
        //As the build process create only one file. This plugin creates another file that contains only the minified styles 
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        //This emptys the dist folder created by the build process before creating it again.
        //It can also empty any other folder you choose
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        //It serves to the build process to create a index.html file in the dist folder
        //It is created because the [contenthash] comand changes the hash of the file every time there is a change in the files.
        //So instead of changing the HTML file all the time another HTML file is created every time we run build
        new HtmlWebpackPlugin({
            title: 'WebPack 4 - Training',
            filename: 'custom_index.html',
            meta: {
                description: 'WebPack 4 - Training'
            }
        })
    ]
}