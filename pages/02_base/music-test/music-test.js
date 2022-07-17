Page({
  data: {
    bam: '',
    isPlaying: false,
  },

  onLoad: function (options) {
    this.setData({
      bam: wx.getBackgroundAudioManager()
    })

    this.data.bam.onPlay(() => {
      this.setData({
        isPlaying: true,
      })
      console.log('isPlaying -->', this.data.isPlaying)
    })

    this.data.bam.onPause(() => {
      this.setData({
        isPlaying: false,
      })
      console.log('isPlaying -->', this.data.isPlaying)
    })
  },

  play() {
    // 注意：下面的两个 url 只能是外链，本地文件拿不到资源（小程序就是要小，音频文件太大了）
    this.data.bam.src = 'https://webfs.tx.kugou.com/202207172243/249a1becc006b07ab2fdfab85a625835/KGTX/CLTX001/2a8e1667ead7aa4f43d82d830f6cc91a.mp3'
    this.data.bam.coverImgUrl = 'https://imgessl.kugou.com/stdmusic/20201208/20201208155701108376.jpg'
    this.data.bam.title = 'Lush Life - Faded'
    this.data.bam.play()
  },

  pause() {
    this.data.bam.pause()
  },
});
