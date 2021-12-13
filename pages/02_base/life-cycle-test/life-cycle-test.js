Page({
    /**
     * 页面的初始数据
     */
    data: {
      message: '生命周期测试'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log('onLoad')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log('onReady')
    },

    /**
     * 生命周期函数--监听页面显示
     *    - 代表显示的一瞬间，可能还没有渲染完成
     *    - 加载组件，显示页面时会触发
     *    - 在手机上，将小程序由后台切换至前台时也会触发
     */
    onShow: function () {
      console.log('onShow')
    },

    /**
     * 生命周期函数--监听页面隐藏
     *    - 在手机上，将小程序切换至后台时会触发（可通过：微信开发者工具 -> 模拟操作 -> Home 演示效果）
     */
    onHide: function () {
      console.log('onHide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log('onUnload')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     *    - 需要在 json 文件里配置 "enablePullDownRefresh": true
     */
    onPullDownRefresh: function () {
      console.log('onPullDownRefresh')
      setTimeout(() => {
        wx.stopPullDownRefresh()
        console.log('pullDownRefresh closed')
      }, 1500)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     *    - 点击分享的时候，同时也会触发 onHide 生命周期
     */
    onShareAppMessage: function () {
      console.log('onShareAppMessage')
    }
})
