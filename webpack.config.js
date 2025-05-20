const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],
  devtool: 'source-map', // improved source map option
  
  // Updated devServer configuration for webpack-dev-server v4+
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        ignored: /node_modules/,
      },
    },
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open browser
  },
  
  // Module rules
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // Uncommented and updated SCSS handling
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // Implementation specifically set to use Dart Sass
              implementation: require('sass')
            }
          }
        ]
      },
      // New asset module for handling images, fonts, etc.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      // New asset module for handling fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      }
    ]
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
    publicPath: '/' // Base path for all assets
  },
  
  // Updated plugin syntax for webpack 5
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/_dist', to: 'assets/_dist' }
      ]
    })
  ],
  
  // Cache for faster rebuilds
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  
  // Optimization for production builds
  optimization: {
    moduleIds: 'deterministic', // Enables long-term caching
    splitChunks: {
      chunks: 'all', // Split vendor modules into separate chunks
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};