Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false
  },

  bgm : null,
  music_url: 'http://localhost/01.mp3',
  music_coverImgUrl: 'http://localhost/cover.jpg',
  onReady: function () {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'marry me'
    this.bgm.epname = 'wedding'
    this.bgm.singer = "singer"
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  play:function(e){
    if(this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '13700000000',
    })
  },
  callBride:function(){
    wx.makePhoneCall({
      phoneNumber: '15600000000',
    })
  }
})
