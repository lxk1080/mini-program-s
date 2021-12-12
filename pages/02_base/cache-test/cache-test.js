
// getApp 是小程序内置的方法，可以获取 App 里定义的所有方法和属性
const app = getApp()

Page({
  data: {},
  onLoad: async function (options) {
    // app 就是 app.js 文件里面定义的对象
    console.log('app -->', app)

    /**
     * 小程序内置的缓存机制 Storage
     */

    // 1、同步
    wx.setStorageSync('flag', 123)
    console.log('flag -->', wx.getStorageSync('flag'))

    // 2、异步
    wx.setStorage({
      key: 'hero',
      data: '亚索',
    })
    const res = await wx.getStorage({ key: 'hero' })
    console.log('hero -->', res.data)

    // 3、对象形式的数据，可以直接存储和使用，不需要 stringify 和 parse
    wx.setStorageSync('obj', { a: 555 })
    console.log('obj -->', wx.getStorageSync('obj').a)
  }
});
