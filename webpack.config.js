var path = require("path");

module.exports = {
     devtool: 'source-map',
     entry: {
         script2: './src/script2.js',
         vis_nodes: './src/vis_nodes.js'
        },
     output: {
		filename: "[name].bundle.js"
     }
 };
