Page({
  data: {},
  onLoad: function (options) {

  },

  toTest2NavigateTo() {
    wx.navigateTo({
      url: '../test-2/test-2'
    })
  },

  toTest2RedirectTo() {
    wx.redirectTo({
      url: '../test-2/test-2'
    })
  }
});
