Page({
  data: {},
  onLoad: function (options) {

  },

  onToast() {
    wx.showToast({
      title: '这是一个轻提示',
      icon: 'success',
      duration: 1000,
    })
  },

  onLoading() {
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  onModal() {
    wx.showModal({
      title: '重提示',
      content: '这是一个模态框',
      confirmText: '确认',
      cancelText: '取消',
      success (res) {
        console.log(res)
        if (res.confirm) {
          console.log('点击了确定')
        } else if (res.cancel) {
          console.log('点击了取消')
        }
      }
    })
  },

  onActionSheet() {
    wx.showActionSheet({
      itemList: ['AAA', 'BBB', 'CCC'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      },
    })
  },
});
