Page({
  data: {},
  onLoad: function (options) {

  },

  toPage(e) {
    const name = e.target.id
    wx.navigateTo({
      url: `../${name}/${name}`
    })
  }
});
