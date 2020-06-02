/**
 * 打包入口文件
 */
const glob = require('glob')

let list =
  {
    index: {
      input: 'src/index.js',
      output: 'index'
    }
  }

glob.sync('./packages/*/index.js').forEach(path => {
  const chunk = path.split('packages/')[1].split('/index.js')[0]
  list[chunk] = {
    input: `packages/${chunk}/index.js`,
    output: chunk
  }
})

module.exports = list
