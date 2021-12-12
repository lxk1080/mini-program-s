Page({
  data: {
    bam: ''
  },

  onLoad: function (options) {
    this.setData({
      bam: wx.getBackgroundAudioManager()
    })
  },

  play() {
    // 注意：下面的两个 url 只能是外链，本地文件拿不到资源
    this.data.bam.src = 'https://www.ytmp3.cn/down/75443.mp3'
    this.data.bam.coverImgUrl = 'http://p2.music.126.net/saWwFnVU2hrv5b-vxgdACg==/109951165817062362.jpg?param=130y130'
    this.data.bam.title = '清新的小女孩'
    this.data.bam.play()
  },

  pause() {
    this.data.bam.pause()
  },
});
