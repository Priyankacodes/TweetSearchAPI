import webpack from 'webpack';
import path from 'path';
const distDir = path.join(__dirname, 'client/dist');

const config = {
    entry: './client/src/index',
    output: {
        path: distDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client/src'),
                exclude: ['node_modules'],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-2']
                        }
                    }
                ]
            }
        ]
    }
};

export default config;