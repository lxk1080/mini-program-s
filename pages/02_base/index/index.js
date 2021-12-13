Page({
  data: {},
  onLoad: function (options) {

  },

  start() {
    wx.navigateTo({
      url: '../list/list?message=我是从开始页面来的'
    })
  },
});
