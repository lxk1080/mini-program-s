Page({
  data: {},
  onLoad: function (options) {

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
