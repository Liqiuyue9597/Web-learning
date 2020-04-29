module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'scr' Vue CLI3内部已经配置过
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}