Page({
  data: {},
  onLoad: function (options) {

  },

  toTest3NavigateTo() {
    wx.navigateTo({
      url: '../test-3/test-3'
    })
  },

  toTest3RedirectTo() {
    wx.redirectTo({
      url: '../test-3/test-3'
    })
  }
});
