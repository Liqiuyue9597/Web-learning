const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('assets', resolve('@/assets'))
      // .set('views','@/views')
      // .set('components', '@/components')
      // .set('network', '@/network')
  }
}