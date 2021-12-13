Page({
  data: {
    obj: {
      a: 111,
      b: 222,
    }
  },
  onLoad: function (options) {

  },

  onShowText(e) {
    // 通过 e.detail 获得触发事件附带的参数
    wx.showToast({ title: e.detail })
  },
});
