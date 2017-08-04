import path from 'path'
import webpack from 'webpack'

import PATHS from './paths.babel'

// NOTE: The library and the plugin's filename MUST match.
const vendorLibraryName = 'vendors_lib'

const vendorConfig = {
  context: PATHS.root,
  devtool: '#source-map',
  entry: [
    'react',
    'react-dom',
    'prop-types',
    'promise'
  ],
  output: {
    filename: 'vendors.dll.js',
    library: vendorLibraryName,
    path: PATHS.dll
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      name: vendorLibraryName,
      path: path.resolve(PATHS.root, 'dll/vendors-manifest.json')
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web'
}

export default vendorConfig
