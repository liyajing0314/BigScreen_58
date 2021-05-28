const path = require('path')
const resolve = dir => {
	return path.join(__dirname, dir)
}
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
	// 基准大小 baseSize，需要和rem.js中相同
	remUnit:192
})


module.exports = {
	publicPath: './',
	lintOnSave: true,
	css: { // 使用等比适配插件
		loaderOptions: {
			postcss: {
				plugins: [
					postcss
				]
			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))

		config.module
			.rule('iview')
			.test(/iview.src.*?js$/)
			.use('babel')
			.loader('babel-loader')
			.end()
	},
	devServer: {
		proxy: {
			'/': {
				target: 'https://www.fastmock.site/mock/49ecb4bad1fa1d015183fd4e6af14317/twb',
				ws: false,
				changeOrigin: true
			},
		},
		overlay: {
			warnings: false,
			errors: false
		}
	},
	lintOnSave: false
}
