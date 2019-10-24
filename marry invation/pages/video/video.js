// pages/video/video.js
Page({
  data: {
    src: 'http://localhost/03.mp4',
    danmuList:[
      {text:'第一秒出现的弹幕',color:'#ff0000',time:1},
      {text:'第三秒出现的弹幕',color:'#ff00ff',time:3}
    ]
  },
  videoContext:null,
  inputValue:'',
  onReady:function(){
    this.videoContext = wx.createVideoContext('myVideo')
    const TxvContext = requirePlugin("tencentvideo")
    var txvContext = TxvContext.getTxvContext('txv1')
    txvContext.play()
    txvContext.pause()
  },
  bindInputBlur:function(e){
    this.inputValue = e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:'back',
      success:res=>{
        this.setData({
          src:res.tempFilePath
        })
      }
    })
  }
})