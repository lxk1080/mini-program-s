Page({
  data: {},
  onLoad: function (options) {
    // 获取参数
    console.log(options.message)
  },

  toPage(e) {
    const { id, dataset } = e.target
    const { prefix } = dataset

    let newUrl = '../'

    if (prefix) {
      newUrl += `${prefix}/`
    }

    newUrl += `${id}/${id}`

    wx.navigateTo({
      url: newUrl
    })
  }
});
