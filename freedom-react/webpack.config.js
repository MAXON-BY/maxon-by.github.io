var path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "output"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: path.join(__dirname, "node_modules"),
				loader: "babel-loader",
				options:  {
					presets: ["react","es2015"]
        		}
			},
			{
				test: /.(jpg|png)$/,
				use:[
					{
						loader: 'file-loader',
						options:{
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/'
						}
					}
				]
			}
		]
	},
	mode: "development"
}