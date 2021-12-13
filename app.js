// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功 -->', res)
      }
    })
  },
  // 全局变量 1
  globalData: {
    userInfo: null,
  },
  // 全局变量 2
  store: {
    a: 1,
    b: 2,
  },
})
