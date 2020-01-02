import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'; 
import { uglify } from 'rollup-plugin-uglify'; 

const env = process.env.NODE_ENV;
const config = {
		input: 'index.js',
		output:
		{
			name: 'nuxUtils',
			file: './dist/nux-utils.js',
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			babel({
				exclude: '**/node_modules/**'
			}),
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	};

	if (env === 'production') {
		config.output.file = './dist/nux-utils.min.js'
		config.plugins.push(
			uglify()
		)
	}
	
	export default config