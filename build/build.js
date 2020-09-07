'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

// ora，一个可以在终端显示spinner的插件
const ora = require('ora')
// rm，用于删除文件或文件夹的插件
const rm = require('rimraf')
const path = require('path')
// chalk，用于在控制台输出带颜色字体的插件
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
if (process.env.npm_lifecycle_script.split(' ')[2] == '"test"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for test....\n' +
        '  测试环境编译:\n'
    ))
} else if (process.env.npm_lifecycle_script.split(' ')[2] == '"pre"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for pre....\n' +
        '  预发布环境编译:\n'
    ))
} else if (process.env.npm_lifecycle_script.split(' ')[2] == '"pro"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for pro....\n' +
        '  生产环境编译:\n'
    ))
} else if (process.env.npm_config_report) {
    console.log(chalk.rgb(124, 252, 0)(
        '  可视化打包文件分析工具编译中....\n'
    ))
} else {
    console.log(chalk.rgb(124, 252, 0)(
        '  编译中....\n'
    ))
}
const spinner = ora('building for production...')
spinner.start() // 开启loading动画

// 首先将整个dist文件夹以及里面的内容删除，以免遗留旧的没用的文件
// 删除完成后才开始webpack构建打包
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err
        // 执行webpack构建打包，完成之后在终端输出构建完成的相关信息或者输出报错信息并退出程序
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
