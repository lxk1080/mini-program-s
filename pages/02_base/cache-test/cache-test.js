
// getApp 是小程序内置的方法，可以获取 App 里定义的所有方法和属性
const app = getApp()

Page({
  data: {},
  onLoad: async function (options) {
    console.log('app -->', app)

    /**
     * 小程序内置的缓存机制
     */

    // 同步
    wx.setStorageSync('flag', 123)
    console.log('flag -->', wx.getStorageSync('flag'))

    // 异步
    wx.setStorage({
      key: 'hero',
      data: '亚索',
    })
    const res = await wx.getStorage({ key: 'hero' })
    console.log('hero -->', res.data)
  }
});
