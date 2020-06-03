/**
 * 打包入口文件
 */
const glob = require('glob')

const list =
  {
    index: {
      input: 'src/index.js',
      output: 'index'
    }
  }

glob.sync('./packages/*/index.*').forEach(path => {
  const chunk = path.split('packages/')[1].split('/index')[0]
  const format = path.split('packages/')[1].split('/index')[1]
  list[chunk] = {
    input: `packages/${chunk}/index.${format}`,
    output: chunk
  }
})

module.exports = list
